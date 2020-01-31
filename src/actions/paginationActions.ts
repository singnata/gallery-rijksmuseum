import {
  HANDLE_PAGE_SIZE,
  HANDLE_PAGE_NUMBER,
  PaginationTypes
} from './../constants/paginationActionTypes';

import { Dispatch } from 'redux';

export const handlePageSizeChange = (pageSize: number) => (dispatch: Dispatch<PaginationTypes>): void => {
  dispatch({ type: HANDLE_PAGE_SIZE, pageSize });
};

export const handlePageNumberChange = (pageNumber: number) => (dispatch: Dispatch<PaginationTypes>): void => {
  dispatch({ type: HANDLE_PAGE_NUMBER, pageNumber });
};
