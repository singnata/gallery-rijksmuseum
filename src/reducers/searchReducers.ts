import {
  SearchState,
  SearchTypes,
  HANDLE_SEARCH,
  HANDLE_ORDER,
} from '../constants/searchActionTypes';

const initialState: SearchState = {
  queryParam: '',
  orderByParam: '',
};


const searchReducer = (state = initialState, action: SearchTypes): SearchState => {
  switch (action.type) {
    case HANDLE_SEARCH:
      return { ...state, queryParam: action.queryParam };
    case HANDLE_ORDER:
      return { ...state, orderByParam: action.orderByParam };

    default:
      return state;
  }
};
export default searchReducer;
