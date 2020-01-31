import React, { useState } from 'react';
import { connect } from 'react-redux';

import PictureDetailsPopUp from '../PictureDetailsPopUp/PictureDetailsPopUp';
import { AppState } from './../../../reducers/index';
import { PictureParam } from './../../../constants/picturesActionTypes';

import {
  PictureStyled,
  PictureDetailsPopUpWrapper,
  Image,
  NoImage,
  PistureTitle
} from './PictureStyles';

export interface PictureProps {
  picture: PictureParam
}

type OwnProps = {
  picture: PictureParam;
};

const Picture: React.FC<PictureProps> = ({ picture }): React.ReactElement => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const togglePopUpOpening = (): void => {
    setIsPopUpOpen(!isPopUpOpen)
  };
  const image = picture.hasImage
    ? <Image src={picture.headerImage.url} alt={picture.title} />
    : <NoImage>No image</NoImage>;

  return (
    <PictureStyled>
      <div onClick={togglePopUpOpening}>
        {image}
        <PistureTitle>{picture.longTitle}</PistureTitle>
      </div>
      {isPopUpOpen &&
        <PictureDetailsPopUpWrapper>
          <PictureDetailsPopUp picture={picture} togglePopUpOpening={togglePopUpOpening} />
        </PictureDetailsPopUpWrapper>
      }
    </PictureStyled>
  )
};

const mapStateToProps = (state: AppState, OwnProps: OwnProps) => {
  return {
    picture: OwnProps.picture,
    collection: state.picturesState.pictureList,
  };
};

export default connect(mapStateToProps)(Picture);
