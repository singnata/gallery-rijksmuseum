import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from 'reducers';
import { handlePageSizeChange, handlePageNumberChange, fetchCollection } from 'actions';
import { FetchCollectionTypes, PaginationTypes, SearchTypes } from 'constants/index';
import {
  PaginationStyled,
  PicturesPerPageWrapper,
  PaginationWrapper
} from './PaginationStyles';

interface PaginationProps {
  currentPageNumber: number;
  pageSize: number;
  handlePageSizeChangeAction: typeof handlePageSizeChange;
  fetchCollectionAction: typeof fetchCollection;
  handlePageNumberChangeAction: typeof handlePageNumberChange;
  picturesCount: number
}

const Pagination: React.FC<PaginationProps> = ({
  currentPageNumber,
  pageSize,
  handlePageSizeChangeAction,
  fetchCollectionAction,
  handlePageNumberChangeAction,
  picturesCount,
}) => {
  const count = picturesCount > 10000 ? 10000 : picturesCount;
  const totalPages = Math.ceil(count / pageSize);
  const perPageList = [10, 50, 100];
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    fetchCollectionAction();
  }, [pageSize, currentPageNumber, fetchCollectionAction]);

  const onChangePageSize = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, pageSize: number) => {
    event.preventDefault();
    if (currentPageNumber > totalPages / pageSize) {
      handlePageNumberChangeAction(1)
    }
    handlePageSizeChangeAction(pageSize);
  };

  const onChangePageNumber = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, pageNumber: number) => {
    event.preventDefault()
    handlePageNumberChangeAction(pageNumber)
  };

  const handleBreakClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, pageNumber: number) => {
    event.preventDefault();
    const page = currentPageNumber < pageNumber ? getIncrementPage() : getDecrementPage();
    handlePageNumberChangeAction(page)
  }

  const getPageView = (pageNumber: number): JSX.Element => {
    return (
      <li
        className={pageNumber === currentPageNumber ? 'active' : ''}
        key={pageNumber}
        onClick={(event) => onChangePageNumber(event, pageNumber)}
      >
        {pageNumber}
      </li>
    )
  }

  const getIncrementPage = (): number => {
    const incrementPage = currentPageNumber + 3;
    return incrementPage >= totalPages ? totalPages - 1 : incrementPage;
  }

  const getDecrementPage = (): number => {
    const decrementPage = currentPageNumber - 3;
    return decrementPage < 1 ? 1 : decrementPage;
  }

  const getPagination = (): Array<JSX.Element> => {
    let totalPagesArray: Array<number> = [];
    for (let i = 1; i <= totalPages; i++) {
      totalPagesArray.push(i);
    }
    let renderedPages: Array<JSX.Element> = [];
    let marginPagesDisplayed: number = 2;
    let breakView: JSX.Element;

    if (totalPages <= marginPagesDisplayed) {
      totalPagesArray.forEach(pageNumber => {
        renderedPages.push(getPageView(pageNumber));
      });

      return renderedPages;
    }

    totalPagesArray.forEach((pageNumber: number) => {
      if (
        pageNumber <= marginPagesDisplayed
        || pageNumber > totalPages - marginPagesDisplayed
        || (pageNumber >= currentPageNumber - marginPagesDisplayed
          && pageNumber <= currentPageNumber + marginPagesDisplayed)
      ) {
        renderedPages.push(getPageView(pageNumber));
      } else if (renderedPages[renderedPages.length - 1] !== breakView) {
        breakView = (
          <li
            onClick={(event) => handleBreakClick(event, pageNumber)}
            key={pageNumber}
          > &#46;&#46;&#46; </li>
        );
        renderedPages.push(breakView);
      }
    })

    return renderedPages;
  }

  return (
    <PaginationStyled>
      <PaginationWrapper>
        <button
          disabled={currentPageNumber === 1}
          onClick={() => handlePageNumberChangeAction(currentPageNumber - 1)}
          className={currentPageNumber === 1 ? 'disable' : ''}
        >Previous</button>

        <ul>{getPagination()}</ul>

        <button
          disabled={currentPageNumber === totalPages}
          onClick={() => handlePageNumberChangeAction(currentPageNumber + 1)}
          className={currentPageNumber === totalPages ? 'disable' : ''}
        >Next</button>
      </PaginationWrapper>
      <PicturesPerPageWrapper>
        {perPageList.map(item => {
          return <span
            className={(item) === pageSize ? 'active' : ''}
            key={item}
            onClick={(event) => onChangePageSize(event, item)}
          >
            {item}
          </span>
        })}
      </PicturesPerPageWrapper>
    </PaginationStyled>
  )
};

const mapStateToProps = (state: AppState) => {
  return {
    currentPageNumber: state.pagination.pageNumber,
    pageSize: state.pagination.pageSize,
    picturesCount: state.pictures.pictureList.count,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<FetchCollectionTypes | PaginationTypes | SearchTypes>) => {
  return bindActionCreators(
    {
      fetchCollectionAction: fetchCollection,
      handlePageSizeChangeAction: handlePageSizeChange,
      handlePageNumberChangeAction: handlePageNumberChange,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Pagination));
