import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from './../../../reducers/index';
import {
  SearchStyled,
  OrderByWrapper,
  SearchWrapper,
  SearchInput,
  OrderByInput,
  OrderByClearButton,
  SearchClearButton,
  SearchButton
} from './SearchStyles'
import { handleOrderByParamsChange, handleQueryParamChange } from '../../../actions/searchActions';
import { fetchCollection } from '../../../actions/pictureActions';
import { FetchCollectionTypes } from './../../../constants/picturesActionTypes';
import { SearchTypes } from './../../../constants/searchActionTypes';

interface OrderByLabels {
  [key: string]: string
}
interface SearchProps {
  handleOrderByParamsChangeAction: typeof handleOrderByParamsChange,
  pageNumber: number,
  pageSize: number,
  queryParam: string,
  orderByParam: string,
  fetchCollectionAction: typeof fetchCollection,
  handleQueryParamChangeAction: typeof handleQueryParamChange,
}

const ORDER_BY_LABELS: OrderByLabels = {
  'relevance': 'Relevance',
  'objecttype': 'Object type',
  'chronologic': 'Chronologic',
  'achronologic': 'Achronologic',
  'artist': 'Artist',
  'artistdesc': 'Artist description'
}
const ORDER_BY_OPTIONS: Array<string> = [
  'relevance', 'objecttype', 'chronologic', 'achronologic', 'artist', 'artistdesc'
]
const ORDER_BY_PLACEHOLDER = '-- click to select an option --'

const Search: React.FC<SearchProps> = ({
  handleOrderByParamsChangeAction,
  queryParam,
  orderByParam,
  fetchCollectionAction,
  handleQueryParamChangeAction,
}): React.ReactElement => {
  const [isOrderByListOpened, setIsOrderByListOpened] = React.useState<boolean>(false)
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    fetchCollectionAction();
  }, [orderByParam])

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetchCollectionAction();
  };

  const onChangeQueryParam = (event: React.ChangeEvent<{ value: unknown | string }>): void => {
    event.preventDefault();
    const queryParam = event.target.value as string;
    handleQueryParamChangeAction(queryParam);
  };

  const handleResetQueryParam = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    handleQueryParamChangeAction('');
    fetchCollectionAction();
  };

  const onSelectOrderByParams = (orderByOption: string): void => {
    setIsOrderByListOpened(!isOrderByListOpened)
    handleOrderByParamsChangeAction(orderByOption);
  }

  const toggleOrderByList = (): void => {
    setIsOrderByListOpened(!isOrderByListOpened)
  }

  const resetOrderByParams = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    handleOrderByParamsChangeAction('');
    setIsOrderByListOpened(false);
  }

  return (
    <SearchStyled >
      <OrderByWrapper>
        <span>Order by:</span>
        <OrderByInput
          onClick={toggleOrderByList}
          onBlur={toggleOrderByList}
        >
          {orderByParam === '' ? ORDER_BY_PLACEHOLDER : ORDER_BY_LABELS[orderByParam]}
        </OrderByInput>
        <OrderByClearButton
          onClick={resetOrderByParams}
        >&times;</OrderByClearButton>
        <ul className={isOrderByListOpened ? 'shown' : 'hidden'}>
          {ORDER_BY_OPTIONS.map((option: string) => {
            return (
              <li
                onClick={() => onSelectOrderByParams(option)}
                key={option}
                className={option === orderByParam ? 'selected' : ''}
              >{ORDER_BY_LABELS[option]}</li>
            )
          })}
        </ul>
      </OrderByWrapper>

      <SearchWrapper>
        <form onSubmit={handleSearchSubmit}>
          <SearchInput
            placeholder="-- search keyword --"
            onChange={onChangeQueryParam}
            value={queryParam}
          />
          <SearchClearButton type="button" onClick={handleResetQueryParam}>
            &times;
          </SearchClearButton>
          <SearchButton type="submit">
            Search
          </SearchButton>
        </form>
      </SearchWrapper>
    </SearchStyled>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    pageNumber: state.paginationState.pageNumber,
    pageSize: state.paginationState.pageSize,
    queryParam: state.searchState.queryParam,
    orderByParam: state.searchState.orderByParam,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<FetchCollectionTypes|SearchTypes>) => {
  return bindActionCreators(
    {
      handleOrderByParamsChangeAction: handleOrderByParamsChange,
      fetchCollectionAction: fetchCollection,
      handleQueryParamChangeAction: handleQueryParamChange,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
