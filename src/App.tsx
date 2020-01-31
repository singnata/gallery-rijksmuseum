import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import { handleQueryParamChange } from './actions/searchActions';
import { fetchCollection } from './actions/pictureActions';
import { AppState } from './reducers/index';
import Header from './components/Header/Header';
import PictureList from './components/Collection/PictureList';
import Pagination from './components/Pagination/Pagination';
import { FetchCollectionTypes } from './constants/picturesActionTypes';
import { SearchTypes } from './constants/searchActionTypes';
import { PictureParam } from './constants/picturesActionTypes';

const InProgressWrapper = styled.div`
  text-align: center;
  font-size: 27px;
`

interface AppProps {
  collection: {
    artObjects: Array<PictureParam>,
    count: number
  },
  isLoading: boolean,
  match?: any,
  fetchCollection: typeof fetchCollection,
  handleQueryParamChange: typeof handleQueryParamChange,
}

const App = React.memo(function App({
  match,
  fetchCollection,
  collection,
  isLoading,
  handleQueryParamChange,
}: AppProps) {
  useEffect(() => {
    let queryParam;
    if (match.params.objectType) {
      queryParam = match.params.objectType;
      handleQueryParamChange(queryParam);
    }
    fetchCollection();
  }, []);
  const isThereCollection = collection.artObjects && collection.artObjects.length !== 0 && !isLoading;
  const pictureList = isThereCollection ? (
    <PictureList />
  ) : (
      <div className="no-found">No art object could be found by your query</div>
    );

  return (
    <Fragment>
      <Header />
      {isLoading ? <InProgressWrapper>Loading ...</InProgressWrapper> : pictureList}
      {!isLoading && <Pagination />}
    </Fragment>
  );
})

const mapStateToProps = (state: AppState) => {
  return {
    collection: state.picturesState.pictureList,
    isLoading: state.picturesState.isLoading,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<FetchCollectionTypes|SearchTypes>) => {
  return bindActionCreators(
    {
      fetchCollection,
      handleQueryParamChange
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
