import React from 'react';
import { connect } from 'react-redux';

import Picture from './Picture/Picture';
import { PictureListStyled } from './PictureListStyles';
import { AppState } from './../../reducers/index';
import { PictureParam } from './../../constants/picturesActionTypes'

export interface PictureListProps {
  collection: {
    artObjects: PictureParam[],
    count: number
  },
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
    collection: state.picturesState.pictureList,
  };
};

export default connect(mapStateToProps)(PictureList);
