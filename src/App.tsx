import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import PictureList from 'components/Collection/PictureList';
import Pagination from 'components/Pagination/Pagination';
import { AppState } from 'reducers';
import { PictureParam, FetchCollectionTypes, SearchTypes } from './constants';
import { handleQueryParamChange, fetchCollection } from 'actions';

const InProgressWrapper = styled.div`
  text-align: center;
  font-size: 27px;
`
const NoFoundMessage = styled.div`
  text-align: center;
  margin: 50px auto;
  width: 500px;
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

const App = ({
  match,
  fetchCollection,
  collection,
  isLoading,
  handleQueryParamChange,
}: AppProps) => {
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
      <NoFoundMessage>No art object could be found by your query</NoFoundMessage>
    );

  console.log('render')
  return (
    <Fragment>
      <Header />
      {isLoading ? <InProgressWrapper>Loading ...</InProgressWrapper> : pictureList}
      {!isLoading && <Pagination />}
    </Fragment>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    collection: state.pictures.pictureList,
    isLoading: state.pictures.isLoading,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<FetchCollectionTypes | SearchTypes>) => {
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
)(React.memo(App));
