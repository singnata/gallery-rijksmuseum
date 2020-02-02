import {
  HANDLE_QUERY_PARAM_CHANGE,
  HANDLE_ORDER_BY_PARAMS_CHANGE,
  HandleOrderByParamsChangeAction,
  HandleQueryParamChangeAction
} from 'constants/index';

export const handleOrderByParamsChange = (orderByParam: string): HandleOrderByParamsChangeAction => {
  return { type: HANDLE_ORDER_BY_PARAMS_CHANGE, orderByParam };
};

export const handleQueryParamChange = (queryParam: string): HandleQueryParamChangeAction => {
  return { type: HANDLE_QUERY_PARAM_CHANGE, queryParam };
};
