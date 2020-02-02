export const HANDLE_PAGE_SIZE_CHANGE = 'HANDLE_PAGE_SIZE_CHANGE';
export const HANDLE_PAGE_NUMBER_CHANGE = 'HANDLE_PAGE_NUMBER_CHANGE';

export interface HandlePageSizeChangeAction {
  type: typeof HANDLE_PAGE_SIZE_CHANGE,
  pageSize: number
}
export interface HandlePageNumberChangeAction {
  type: typeof HANDLE_PAGE_NUMBER_CHANGE,
  pageNumber: number
}
export type PaginationTypes = HandlePageSizeChangeAction | HandlePageNumberChangeAction

export interface PaginationState {
  pageNumber: number,
  pageSize: number,
}
