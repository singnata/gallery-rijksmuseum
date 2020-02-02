import React, { useState } from 'react';
import { connect } from 'react-redux';

import PictureDetailsPopUp from './../PictureDetailsPopUp/PictureDetailsPopUp';
import { AppState } from 'reducers';
import { PictureParam } from 'constants/index';

import {
  PictureStyled,
  PictureDetailsPopUpWrapper,
  Image,
  NoImage,
  PistureTitle
} from './PictureStyles';

export interface PictureProps {
  picture: PictureParam;
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
          <PictureDetailsPopUp
            picture={picture}
            togglePopUpOpening={togglePopUpOpening}
          />
        </PictureDetailsPopUpWrapper>
      }
    </PictureStyled>
  )
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  return {
    picture: ownProps.picture,
    collection: state.pictures.pictureList,
  };
};

export default connect(mapStateToProps)(React.memo(Picture));
