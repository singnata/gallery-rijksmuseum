import styled from 'styled-components'

export const SearchStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 13px;
  position: relative;
  padding: 10px 10px;
  margin-bottom: 30px;
`

export const OrderByWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;

  ul {
    margin-left: 88px;
    border: 2px solid #ccc;
    border-radius: 20px;
    width: 418px;
    margin-top: 0;
    position: absolute;
    z-index: 10;
    background-color: #eee;
    padding: 0;

    li {
      border-bottom: 1px solid #ccc;
      padding: 7px 32px;
      &:last-child {
        border-bottom: none;
      }
      &.selected {
        background-color: #ccc;
      }
    }
  }
`

export const SearchWrapper = styled.div`
  text-align: right;
  position: relative;
`
export const SearchInput = styled.input`
  outline: none;
  font-family: inherit;
  background-color: inherit;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 9px 10px;
  font-size: 16px;
  width: 60%;
  display: inline-block;
  margin-left: 15px;
`

export const OrderByInput = styled.div`
  font-family: inherit;
  background-color: inherit;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 9px 10px;
  font-size: 16px;
  width: 400px;
  display: inline-block;
  margin-left: 15px;
`

export const ButtonStyled = styled.button`
  cursor:  pointer;
  top: 10px;
  position: absolute;
  font-size: 18px;
  border: 2px solid #ccc;
  background-color: inherit;
  border-radius: 10px;
  outline: none;

  &:hover {
    background-color: #ccc;
  }
`

export const OrderByClearButton = styled(ButtonStyled)`
  left: 474px;
`

export const SearchClearButton = styled(ButtonStyled)`
  right: 89px;
`

export const SearchButton = styled(ButtonStyled)`
  font-family: inherit;
  font-size: 15px;
  position: relative;
  padding: 9px 10px;
  top: 0px;
  margin-left: 10px;
  border-radius: 15px;
`
