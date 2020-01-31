import {
  HANDLE_SEARCH,
  HANDLE_ORDER,
  SearchTypes
} from '../constants/searchActionTypes';
import { Dispatch } from 'redux';

export const handleOrderByParamsChange = (orderByParam: string) => (dispatch: Dispatch<SearchTypes>) => {
  dispatch({ type: HANDLE_ORDER, orderByParam });
};

export const handleQueryParamChange = (queryParam: string) => (dispatch: Dispatch<SearchTypes>) => {
  dispatch({ type: HANDLE_SEARCH, queryParam });
};
