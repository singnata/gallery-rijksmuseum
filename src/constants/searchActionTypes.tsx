export const HANDLE_QUERY_PARAM_CHANGE = 'HANDLE_QUERY_PARAM_CHANGE';
export const QUERY_PARAM_CHANGE = 'QUERY_PARAM_CHANGE';

export const HANDLE_ORDER_BY_PARAMS_CHANGE = 'HANDLE_ORDER_BY_PARAMS_CHANGE';
export const ORDER_BY_PARAM_CHANGE = 'ORDER_BY_PARAM_CHANGE';

export const HANDLE = 'HANDLE';

export interface HandleOrderByParamsChangeAction {
  type: typeof HANDLE_ORDER_BY_PARAMS_CHANGE,
  orderByParam: string
}
export interface HandleQueryParamChangeAction {
  type: typeof HANDLE_QUERY_PARAM_CHANGE,
  queryParam: string
}
export type SearchTypes = HandleOrderByParamsChangeAction | HandleQueryParamChangeAction

export interface SearchState {
  queryParam: string,
  orderByParam: string,
}
