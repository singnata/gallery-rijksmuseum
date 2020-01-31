
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { PictureDetailsPopUpStyled, ButtonsContainer, CloseButton, NoImage } from './PictureDetailsPopUpStyles';
import { PictureParam } from './../../../constants/picturesActionTypes';
import { AppState } from './../../../reducers/index';

export interface PictureDetilsPopUpProps {
  picture: PictureParam,
  togglePopUpOpening: any
}

type OwnProps = {
  picture: PictureParam;
};

const PictureDetailsPopUp: React.FC<PictureDetilsPopUpProps> = ({ picture, togglePopUpOpening }): React.ReactElement => {
  const isThereProductionPlace = picture.productionPlaces && picture.productionPlaces.length !== 0;
  const productionPlace = picture.productionPlaces.map((item, index) => {
    return <span key={index}>{item} </span>
  });

  const pictureMaker = picture.principalOrFirstMaker && (
    <div>
      <span>Principal or first maker: </span>
      {picture.principalOrFirstMaker}
    </div>
  );

  const image = picture.hasImage ? (
    <img src={picture.headerImage.url} alt={picture.title} />
  ) : (
      <NoImage>No image</NoImage>
    );

  return (
    <PictureDetailsPopUpStyled>
      {image}
      <div>{picture.longTitle}</div>
      {pictureMaker}
      <div>
        <span>Object number: </span>
        {picture.objectNumber}
      </div>
      <div>
        {isThereProductionPlace && (
          <span>
            Production place: <span>{productionPlace}</span>
          </span>
        )}
      </div>
      <ButtonsContainer>
        <Link to={`/picture/${picture.objectNumber}`} target="_blank">
          View more details
          </Link>
        <CloseButton type="submit" onClick={togglePopUpOpening}>
          Close
          </CloseButton>
      </ButtonsContainer>
    </PictureDetailsPopUpStyled>
  );
};

const mapStateToProps = (state: AppState, OwnProps: OwnProps) => {
  return {
    picture: OwnProps.picture,
  };
};

export default connect(mapStateToProps)(PictureDetailsPopUp);
