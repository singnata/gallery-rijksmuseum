import {
  PaginationState,
  PaginationTypes,
  HANDLE_PAGE_SIZE_CHANGE,
  HANDLE_PAGE_NUMBER_CHANGE,
} from 'constants/index';

const initialState: PaginationState = {
  pageNumber: 1,
  pageSize: 50,
};


const paginationReducer = (state = initialState, action: PaginationTypes): PaginationState => {
  switch (action.type) {
    case HANDLE_PAGE_SIZE_CHANGE:
      return { ...state, pageSize: action.pageSize };
    case HANDLE_PAGE_NUMBER_CHANGE:
      return { ...state, pageNumber: action.pageNumber };
    default:
      return state;
  }
};
export default paginationReducer;
