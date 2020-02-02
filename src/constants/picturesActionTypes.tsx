export const FETCH_COLLECTION_REQUEST = 'FETCH_COLLECTION_REQUEST';
export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE';
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS';
export const FETCH_COLLECTION = 'FETCH_COLLECTION';

export const FETCH_PICTURE_INFO_REQUEST = 'FETCH_PICTURE_INFO_REQUEST';
export const FETCH_PICTURE_INFO_FAILURE = 'FETCH_PICTURE_INFO_FAILURE';
export const FETCH_PICTURE_INFO_SUCCESS = 'FETCH_PICTURE_INFO_SUCCESS';
export const FETCH_PICTURE_INFO = 'FETCH_PICTURE_INFO';

export interface FetchCollectionRequestAction {
  type: typeof FETCH_COLLECTION_REQUEST,
}
export interface FetchCollectionSuccessAction {
  type: typeof FETCH_COLLECTION_SUCCESS,
  pictureList: {
    artObjects: Array<PictureParam>,
    count: number
  }
};
export interface FetchCollectionFailedAction {
  type: typeof FETCH_COLLECTION_FAILURE,
};
export interface FetchCollectionAction {
  type: typeof FETCH_COLLECTION
}
export type FetchCollectionTypes = FetchCollectionRequestAction
  | FetchCollectionSuccessAction
  | FetchCollectionFailedAction
  | FetchCollectionAction

export interface FetchPictureDetailsRequestAction {
  type: typeof FETCH_PICTURE_INFO_REQUEST,
}
export interface FetchPictureDetailsSuccessAction {
  type: typeof FETCH_PICTURE_INFO_SUCCESS,
  picture: PictureDetailsParam
};
export interface FetchPictureDetailsFailedAction {
  type: typeof FETCH_PICTURE_INFO_FAILURE,
};
export interface FetchPictureDetailsAction {
  type: typeof FETCH_PICTURE_INFO,
  objectNumber: string
}
export type FetchPictureDetailsTypes = FetchPictureDetailsRequestAction
  | FetchPictureDetailsSuccessAction
  | FetchPictureDetailsFailedAction
  | FetchPictureDetailsAction

export interface PictureParam {
  hasImage: any,
  title: string,
  headerImage: {
    url: string
  },
  longTitle: string,
  id: string,
  productionPlaces: [],
  principalOrFirstMaker: string,
  objectNumber: string
}

export interface PictureDetailsParam {
  title: string;
  artObject: {
    materials: [];
    objectTypes: [];
    hasImage: boolean;
    webImage: { url: string; };
    principalOrFirstMaker: [];
    longTitle: string;
    description: string;
    dating: { presentingDate: string; };
  };
}

export interface PicturesState {
  isError: boolean,
  pictureList: PictureListParam,
  isLoading: boolean,
  picture: PictureDetailsParam,
}

export interface PictureListParam {
  artObjects: Array<PictureParam>,
  count: number
}
