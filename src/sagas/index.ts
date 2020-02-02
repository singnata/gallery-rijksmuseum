import { takeEvery } from 'redux-saga/effects';

import {
  FETCH_COLLECTION,
  FETCH_PICTURE_INFO
} from 'constants/index';
import { fetchCollectionSaga, fetchPictureInfoSaga } from './picture';

export function* watchPicture() {
  yield takeEvery(FETCH_COLLECTION, fetchCollectionSaga);
  yield takeEvery(FETCH_PICTURE_INFO, fetchPictureInfoSaga);
}
