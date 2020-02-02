
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  PictureDetailsPopUpStyled,
  ButtonsContainer,
  CloseButton,
  NoImage
} from './PictureDetailsPopUpStyles';
import { PictureParam } from 'constants/index';
import { AppState } from 'reducers';

export interface PictureDetilsPopUpProps {
  picture: PictureParam,
  togglePopUpOpening: () => void
};

type OwnProps = {
  picture: PictureParam;
};

const PictureDetailsPopUp: React.FC<PictureDetilsPopUpProps> = ({ picture, togglePopUpOpening }): React.ReactElement => {
  const isThereProductionPlace = picture.productionPlaces && picture.productionPlaces.length > 0;

  return (
    <PictureDetailsPopUpStyled>

      {picture.hasImage ? (
        <img src={picture.headerImage.url} alt={picture.title} />
      ) : (
          <NoImage>No image</NoImage>
        )}

      <div>{picture.longTitle}</div>

      {picture.principalOrFirstMaker && (
        <div>
          <span>Principal or first maker: </span>
          {picture.principalOrFirstMaker}
        </div>
      )}

      <div>
        <span>Object number: </span>
        {picture.objectNumber}
      </div>

      <div>
        {isThereProductionPlace && (
          <span>
            Production place:&nbsp;
            <span>
              {picture.productionPlaces.map((productionPlace, index, array) => {
                return ((array[index] !== array[index + 1]) && productionPlace);
              })}
            </span>
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

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  return {
    picture: ownProps.picture,
  };
};

export default connect(mapStateToProps)(React.memo(PictureDetailsPopUp));
