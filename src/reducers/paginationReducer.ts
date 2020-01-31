import {
  PaginationState,
  PaginationTypes,
  HANDLE_PAGE_SIZE,
  HANDLE_PAGE_NUMBER,
} from './../constants/paginationActionTypes';

const initialState: PaginationState = {
  pageNumber: 1,
  pageSize: 50,
};


const paginationReducer = (state = initialState, action: PaginationTypes): PaginationState => {
  switch (action.type) {
    case HANDLE_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize };
    case HANDLE_PAGE_NUMBER:
      return { ...state, pageNumber: action.pageNumber };
    default:
      return state;
  }
};
export default paginationReducer;
