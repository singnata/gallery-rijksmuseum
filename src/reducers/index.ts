import { combineReducers } from 'redux';

import picturesReducer from './picturesReducer';
import searchReducer from './searchReducers';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  pictures: picturesReducer,
  search: searchReducer,
  pagination: paginationReducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
