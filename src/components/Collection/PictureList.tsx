import React from 'react';
import { connect } from 'react-redux';

import Picture from './Picture/Picture';
import { PictureListStyled } from './PictureListStyles';
import { AppState } from 'reducers';
import { PictureListParam, PictureParam } from 'constants/index';

export interface PictureListProps {
  collection: PictureListParam,
}

const PictureList: React.FC<PictureListProps> = ({ collection }): React.ReactElement => {
  return (
    <PictureListStyled>
      {collection.artObjects.map((picture: PictureParam) => {
        return (
          <Picture picture={picture} key={picture.id} />
        )
      })}
    </PictureListStyled>
  )
};

const mapStateToProps = (state: AppState) => {
  return {
    collection: state.pictures.pictureList,
  };
};

export default connect(mapStateToProps)(React.memo(PictureList));
