import {
  HANDLE_PAGE_SIZE_CHANGE,
  HANDLE_PAGE_NUMBER_CHANGE,
  HandlePageSizeChangeAction,
  HandlePageNumberChangeAction
} from 'constants/index';

export const handlePageSizeChange = (pageSize: number): HandlePageSizeChangeAction => {
  return { type: HANDLE_PAGE_SIZE_CHANGE, pageSize };
};

export const handlePageNumberChange = (pageNumber: number): HandlePageNumberChangeAction => {
  return { type: HANDLE_PAGE_NUMBER_CHANGE, pageNumber };
};
