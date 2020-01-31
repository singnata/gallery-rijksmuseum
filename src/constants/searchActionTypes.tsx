export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const HANDLE_ORDER = 'HANDLE_ORDER';

interface HandleOrderByParamsChangeAction {
  type: typeof HANDLE_ORDER,
  orderByParam: string
}
interface HandleQueryParamChangeAction {
  type: typeof HANDLE_SEARCH,
  queryParam: string
}
export type SearchTypes = HandleOrderByParamsChangeAction | HandleQueryParamChangeAction

export interface SearchState {
  queryParam: string,
  orderByParam: string,
}
