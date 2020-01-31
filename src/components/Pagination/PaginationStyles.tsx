import styled from 'styled-components'

export const PaginationStyled = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-column-gap: 13px;
  position: relative;
  padding: 10px 10px;
  margin-bottom: 0;
`

export const PaginationWrapper = styled.div`
  display: inline-block;
  text-align: center;

  button {
    display: inline-block;
    font-size: 18px;
    border: none;
    background-color: inherit;
    outline: none;
    font-family: inherit;
    padding: 7px 10px;

    &:enabled:hover {
      background-color: #ccc;
    }
    &:enabled {
      cursor:  pointer;
    }
  }
  ul {
    padding: 0 20px;
    list-style: none;
    text-align: center;
    display: inline-block;

  }
  li {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
`

export const PicturesPerPageWrapper = styled.div`
  padding: 25px 0;
  display: inline-block;
  text-align: center;

  span {
    cursor: pointer;
    padding: 10px;
    position: relative;
    margin: 10px;

      &:not(:last-child):after {
        content: '/';
        position: absolute;
        top: 0px;
        right: -26px;
        z-index: 10;
        padding: 10px;
      }
  }
`
