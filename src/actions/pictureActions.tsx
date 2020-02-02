import {
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION,
  FETCH_PICTURE_INFO_REQUEST,
  FETCH_PICTURE_INFO_FAILURE,
  FETCH_PICTURE_INFO_SUCCESS,
  FETCH_PICTURE_INFO,
  FetchCollectionTypes,
  FetchPictureDetailsTypes,
  PictureDetailsParam,
  PictureListParam
} from 'constants/index';

export const fetchCollectionRequest = (): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_REQUEST,
  };
};

export const fetchCollectionSuccess = (pictureList: PictureListParam): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_SUCCESS,
    pictureList,
  };
};

export const fetchCollectionFailed = (): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION_FAILURE,
  };
};

export const fetchCollection = (): FetchCollectionTypes => {
  return {
    type: FETCH_COLLECTION,
  };
};

export const fetchPictureInfoRequest = (): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_REQUEST,
  };
};

export const fetchPictureInfoSuccess = (picture: PictureDetailsParam): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_SUCCESS,
    picture,
  };
};

export const fetchPictureInfoFailed = (): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO_FAILURE,
  };
};

export const fetchPictureDetails = (objectNumber: string): FetchPictureDetailsTypes => {
  return {
    type: FETCH_PICTURE_INFO,
    objectNumber,
  };
};
