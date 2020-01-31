import styled from 'styled-components'

export const ImageWrapper = styled.div`
  width: 50%;
  float: left;
  margin-right: 25px;
  img {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 47px;
  }
`

export const NoImage = styled.div`
  border-radius: 56px;
  float: left;
  padding: 74px;
  width: 23%;
  border: 1px solid #ccc;
  margin-right: 20px;
  padding: 60px;
  color: #bbb;
  text-align: center;
  font-size: 31px;
`

export const PictureDetailsStyled = styled.div`
  margin: 50px 100px;

  div {
    margin-bottom: 12px;

    span:first-child {
      font-size: 18px;
      font-weight: 900;
      margin-right: 10px;
    }
  }

  a {
    text-decoration: underline;
  }
`
