import * as actionTypes from '@constants/actionTypes'

const initialState = {
  totalResults: 50,
  totalPages: 5,
  resultsPerPage: 10,
  searchKeyword: '',
  currentPage: 1,
  currentSearchResult: [],
  searchResultHistory: {},
}

export const pageInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_INFO: {
      return { ...state, ...action.payload }
    }

    case actionTypes.GO_NEXT_PAGE: {
      const { currentPage, totalPages } = state

      if (currentPage < totalPages) {
        return { ...state, currentPage: currentPage + 1 }
      }
      return state
    }

    case actionTypes.GO_PREVIOUS_PAGE: {
      const { currentPage } = state

      if (currentPage > 1) {
        return { ...state, currentPage: currentPage - 1 }
      }
      return state
    }

    case actionTypes.GO_NTH_PAGE: {
      const { currentPage, totalPages } = state

      if (currentPage > 1 || currentPage < totalPages) {
        return { ...state, currentPage: action.payload }
      }
      return state
    }

    default: {
      return state
    }
  }
}
