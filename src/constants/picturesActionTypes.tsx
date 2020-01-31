export const FETCH_COLLECTION_REQUEST = 'FETCH_COLLECTION_REQUEST';
export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE';
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS';

export const FETCH_PICTURE_INFO_REQUEST = 'FETCH_PICTURE_INFO_REQUEST';
export const FETCH_PICTURE_INFO_FAILURE = 'FETCH_PICTURE_INFO_FAILURE';
export const FETCH_PICTURE_INFO_SUCCESS = 'FETCH_PICTURE_INFO_SUCCESS';

interface FetchCollectionRequestAction {
  type: typeof FETCH_COLLECTION_REQUEST,
}
interface FetchCollectionSuccessAction {
  type: typeof FETCH_COLLECTION_SUCCESS,
  pictureList?: []
};
interface FetchCollectionFailedAction {
  type: typeof FETCH_COLLECTION_FAILURE,
};
export type FetchCollectionTypes = FetchCollectionRequestAction | FetchCollectionSuccessAction | FetchCollectionFailedAction

interface FetchPictureDetailsRequestAction {
  type: typeof FETCH_PICTURE_INFO_REQUEST,
}
interface FetchPictureDetailsSuccessAction {
  type: typeof FETCH_PICTURE_INFO_SUCCESS,
  picture: {} | null
};
interface FetchPictureDetailsFailedAction {
  type: typeof FETCH_PICTURE_INFO_FAILURE,
};
export type FetchPictureDetailsTypes = FetchPictureDetailsRequestAction | FetchPictureDetailsSuccessAction | FetchPictureDetailsFailedAction

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
  pictureList: {
    artObjects: Array<PictureParam> | undefined,
    count: number
  },
  isLoading: boolean,
  picture: PictureDetailsParam,
}
