import {
  PicturesState,
  FetchCollectionTypes,
  FetchPictureDetailsTypes,
  FETCH_COLLECTION_REQUEST,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  FETCH_PICTURE_INFO_REQUEST,
  FETCH_PICTURE_INFO_FAILURE,
  FETCH_PICTURE_INFO_SUCCESS,
} from './../constants/picturesActionTypes';

const initialState: PicturesState = {
  isError: false,
  pictureList: {
    artObjects: [],
    count: null
  },
  isLoading: false,
  picture: null,
};

const picturesReducer = (state: any = initialState, action: FetchCollectionTypes | FetchPictureDetailsTypes): PicturesState => {
  switch (action.type) {
    case FETCH_COLLECTION_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case FETCH_COLLECTION_SUCCESS:
      return { ...state, pictureList: action.pictureList, isLoading: false };
    case FETCH_COLLECTION_FAILURE:
      return { ...state, isError: true };
    case FETCH_PICTURE_INFO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case FETCH_PICTURE_INFO_SUCCESS:
      return { ...state, picture: action.picture, isLoading: false };
    case FETCH_PICTURE_INFO_FAILURE:
      return { ...state, isError: true };

    default:
      return state;
  }
};
export default picturesReducer;
