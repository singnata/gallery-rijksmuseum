import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState } from 'reducers';

const ErrorMessage = styled.h1`
  text-align: center;
  margin: 50px auto;
  width: 500px;
`

type ErrorBoundaryProps = {
  isError: boolean,
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, isError }) => {
  if (isError) return <ErrorMessage>Something went wrong</ErrorMessage>;
  return (children as React.ReactElement);
}

const mapStateToProps = (state: AppState) => {
  return {
    isError: state.pictures.isError,
  };
};

export default connect(mapStateToProps)(ErrorBoundary);
