import { put, select } from 'redux-saga/effects'

import {
  fetchCollectionRequest,
  fetchCollectionSuccess,
  fetchCollectionFailed,
  fetchPictureInfoRequest,
  fetchPictureInfoSuccess,
  fetchPictureInfoFailed
} from 'actions';
import { getFetchCollectionParams } from 'selectors';
import { FetchPictureDetailsAction, FetchCollectionAction } from 'constants/index';

const baseUrl = `https://www.rijksmuseum.nl/api/en/collection`;
const key = 'key=nMG7xRY4&format=json&';

export function* fetchCollectionSaga(action: FetchCollectionAction) {
  const params = yield select(getFetchCollectionParams);
  const { pageSize, pageNumber, orderByParam, queryParam } = params;
  const getCollectionEndpoint = `${baseUrl}?${key}ps=${pageSize}&p=${pageNumber}&s=${orderByParam}&q=${queryParam}`;

  yield put(fetchCollectionRequest());

  try {
    const response = yield fetch(getCollectionEndpoint);
    const pictureList = yield response.json();
    yield put(fetchCollectionSuccess(pictureList));
  } catch (error) {
    yield put(fetchCollectionFailed());
  }
}

export function* fetchPictureInfoSaga(action: FetchPictureDetailsAction) {
  const getPictureInfoEndpoint = `${baseUrl}/${action.objectNumber}?${key}`;
  console.log(getPictureInfoEndpoint)

  yield put(fetchPictureInfoRequest());

  try {
    const response = yield fetch(getPictureInfoEndpoint);
    const picture = yield response.json();
    console.log(picture)
    yield put(fetchPictureInfoSuccess(picture));
  } catch (error) {
    console.log(error)
    yield put(fetchPictureInfoFailed());
  }
}
