import styled from 'styled-components'

export const PictureStyled = styled.div`
  overflow: hidden;
  height: 120px;

`
export const PictureDetailsPopUpWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`
export const Image = styled.img`
  height: 120px;
  width: auto;
`
export const NoImage = styled.div`
  overflow: hidden;
  height: 120px;
  color: #bbb;
  text-align: center;
  font-size: 25px;
`
export const PistureTitle = styled.span`
  font-size: 10px;
  display: none;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  background: white;
  position: relative;
  height: 38px;
  bottom: 64px;
  left: 0;
  opacity: 0.7;
  background-color: #eee;

  ${PictureStyled}:hover & {
    display: block;
  }
`
