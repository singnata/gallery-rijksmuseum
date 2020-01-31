import React from 'react';
import { connect } from 'react-redux';

type ErrorBoundaryProps = {
  isError: boolean,
}


const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, isError }) => {
  if (isError) return <h1 className='error'>Something went wrong</h1>;
  return (children as React.ReactElement);
}

const mapStateToProps = (state: any) => {
  return {
    isError: state.picturesState.isError,
  };
};

export default connect(mapStateToProps)(ErrorBoundary);
