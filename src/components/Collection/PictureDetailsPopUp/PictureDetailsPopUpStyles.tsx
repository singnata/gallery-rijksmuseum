import styled from 'styled-components'

export const PictureDetailsPopUpStyled = styled.div`
  background-color: #eee;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  margin: auto;
  padding: 20px 30px;

  img {
    width: 100%;
    margin-bottom: 15px;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 100px;
  position: relative;
  padding: 10px 10px;
  display: grid;

  a {
    border: 1px solid #ccc;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 15px;
    text-align: center;

    &:hover {
      background-color: #ccc;
    }
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  background-color: inherit;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 15px;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ccc;
  }
`

export const NoImage = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 20px;
  opacity: 0.6;
`
