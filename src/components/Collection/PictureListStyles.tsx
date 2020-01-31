import styled from 'styled-components';

export const PictureListStyled = styled.div`
  display: grid;
  grid-auto-rows: minmax(max-content, 2fr);
  grid-template-columns: repeat(5,1fr);
  grid-column-gap: 13px;
  grid-row-gap: 13px;
  position: relative;
  max-height: 500px;
  overflow-y: auto;
`
