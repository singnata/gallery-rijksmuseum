import {
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  FETCH_PICTURE_INFO_REQUEST,
  FETCH_PICTURE_INFO_FAILURE,
  FETCH_PICTURE_INFO_SUCCESS,
  FetchCollectionTypes,
  FetchPictureDetailsTypes,
  PictureDetailsParam
} from '../constants/picturesActionTypes';
import { Dispatch } from 'redux';
import store from './../store/index';


let pageSize = 50;
let pageNumber = 1;
let orderByParam = '';
let queryParam = '';

const unsubscribe = store.subscribe(() => {
  const state = store.getState()

  pageSize = state.paginationState.pageSize
  pageNumber = state.paginationState.pageNumber
  orderByParam = state.searchState.orderByParam
  queryParam = state.searchState.queryParam
})

const fetchCollectionRequest = (): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_REQUEST,
  };
};

const fetchCollectionSuccess = (pictureList: []): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_SUCCESS,
    pictureList,
  };
};

const fetchCollectionFailed = (): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_FAILURE,
  };
};

export const fetchCollection = () => {
  const baseUrl = `https://www.rijksmuseum.nl/api/en/collection?key=nMG7xRY4&format=json&`;
  const getCollectionEndpoint = `${baseUrl}ps=${pageSize}&p=${pageNumber}&s=${orderByParam}&q=${queryParam}`;

  return (dispatch: Dispatch<FetchCollectionTypes>) => {
    dispatch(fetchCollectionRequest());

    // const response = await fetch(getCollectionEndpoint);
    // const json = await response.json();
    // if (!ignore) setProduct(json);

    fetch(getCollectionEndpoint)
      .then((response) => response.json())
      .then((pictureList) => {
        dispatch(fetchCollectionSuccess(pictureList));
      })
      .catch(() => {
        dispatch(fetchCollectionFailed());
      });
  };
};

const fetchPictureInfoRequest = (): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_REQUEST,
  };
};

const fetchPictureInfoSuccess = (picture: PictureDetailsParam): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_SUCCESS,
    picture,
  };
};

const fetchPictureInfoFailed = (): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_FAILURE,
  };
};

export const fetchPictureDetails = (objectNumber: number) => {
  const getPictureInfoEndpoint = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=nMG7xRY4&format=json&`;

  return (dispatch: Dispatch<FetchPictureDetailsTypes>) => {
    dispatch(fetchPictureInfoRequest());

    fetch(getPictureInfoEndpoint)
      .then((response) => response.json())
      .then((picture) => {
        dispatch(fetchPictureInfoSuccess(picture));
      })
      .catch(() => {
        dispatch(fetchPictureInfoFailed());
      });
  };
};

// unsubscribe()
