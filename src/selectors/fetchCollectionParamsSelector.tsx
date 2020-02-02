import { AppState } from 'reducers';

export const getFetchCollectionParams = (state: AppState) => {
  return {
    pageSize: state.pagination.pageSize,
    pageNumber: state.pagination.pageNumber,
    orderByParam: state.search.orderByParam,
    queryParam: state.search.queryParam,
  }
};
