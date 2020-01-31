export const HANDLE_PAGE_SIZE = 'HANDLE_PAGE_SIZE';
export const HANDLE_PAGE_NUMBER = 'HANDLE_PAGE_NUMBER';

interface handlePageSizeAction {
  type: typeof HANDLE_PAGE_SIZE,
  pageSize: number
}
interface HandlePageNumberAction {
  type: typeof HANDLE_PAGE_NUMBER,
  pageNumber: number
}
export type PaginationTypes = handlePageSizeAction | HandlePageNumberAction

export interface PaginationState {
  pageNumber: number,
  pageSize: number,
}
