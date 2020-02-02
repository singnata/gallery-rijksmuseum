import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchPictureDetails } from 'actions';
import { AppState } from 'reducers';
import { PictureDetailsParam, FetchPictureDetailsTypes } from 'constants/index';
import { ImageWrapper, NoImage, PictureDetailsStyled } from './PictureDetailsStyles';

export interface PictureDetailsProps {
  fetchPictureDetailsAction: typeof fetchPictureDetails,
  match: any,
  picture: PictureDetailsParam
}

const PictureDetails: React.FC<PictureDetailsProps> = (
  { picture, fetchPictureDetailsAction, match }
): React.ReactElement => {
  useEffect(() => {
    const objectNumber = match.params.objectNumber;
    console.log(objectNumber)
    fetchPictureDetailsAction(objectNumber);
  })

  const isTherePictureDetails = picture && picture.artObject;
  const isThereMaterial = isTherePictureDetails && picture.artObject.materials && picture.artObject.materials.length > 0;
  const isThereObjectType = isTherePictureDetails && picture.artObject.objectTypes && picture.artObject.objectTypes.length > 0;
  const image =
    isTherePictureDetails && picture.artObject.hasImage ? (
      <ImageWrapper>
        <img src={picture.artObject.webImage.url} alt={picture.title} />
      </ImageWrapper>
    ) : (
        <NoImage>No image</NoImage>
      );

  return (
    <PictureDetailsStyled>
      {picture && (
        <div>
          {image}
          <div>
            <span>Title: </span> {picture.artObject.longTitle}
          </div>
          <div>
            <span>Description: </span> {picture.artObject.description}
          </div>
          <div>
            <span>Principal or first maker: </span>
            {picture.artObject.principalOrFirstMaker}
          </div>
          {isThereMaterial && <div>
            <span>Materials: </span>
            {picture.artObject.materials.map((material, index) => <span key={index}>{material} </span>)}
          </div>}
          <div>
            <span>Dating: </span>
            {picture.artObject.dating.presentingDate}
          </div>
          {isThereObjectType && <div>
            <span>Object types: </span>
            {picture.artObject.objectTypes.map((objectType, index) => {
              return (
                <span key={index}>
                  <Link to={`/${objectType}`} target="_blank">
                    {objectType}
                  </Link>
                </span>
              );
            })}
          </div>}
        </div>
      )}
    </PictureDetailsStyled>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    picture: state.pictures.picture,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<FetchPictureDetailsTypes>) => {
  return bindActionCreators(
    {
      fetchPictureDetailsAction: fetchPictureDetails,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PictureDetails));
