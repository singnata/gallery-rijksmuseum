import {
  SearchState,
  SearchTypes,
  HANDLE_QUERY_PARAM_CHANGE,
  HANDLE_ORDER_BY_PARAMS_CHANGE,
} from 'constants/index';

const initialState: SearchState = {
  queryParam: '',
  orderByParam: '',
};

const searchReducer = (state = initialState, action: SearchTypes): SearchState => {
  switch (action.type) {
    case HANDLE_QUERY_PARAM_CHANGE:
      return { ...state, queryParam: action.queryParam };
    case HANDLE_ORDER_BY_PARAMS_CHANGE:
      return { ...state, orderByParam: action.orderByParam };

    default:
      return state;
  }
};
export default searchReducer;
