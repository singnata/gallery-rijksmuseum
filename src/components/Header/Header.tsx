import React, { Fragment } from 'react';
import styled from 'styled-components';

import Search from './Search/Search';

const HeaderTitle = styled.div`
  margin: 30px auto;
  font-size: 35px;
  width: 250px;
  text-align: center;
`

const Header = (): React.ReactElement => {
  return (
    <Fragment>
      <HeaderTitle>Collection</HeaderTitle>
      <Search />
    </Fragment>
  )
};

export default Header;
