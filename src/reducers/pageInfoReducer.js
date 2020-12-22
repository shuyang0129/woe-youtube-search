import * as actionTypes from '@constants/actionTypes'

const initialState = {
  isLoading: false,
  totalResults: 0, // 總筆數
  currentResults: 0, // 目前Redux中儲存筆數
  totalPages: 0, // 總頁數
  resultsPerPage: 10, // 每頁幾筆
  searchKeyword: '', // 目前搜尋關鍵字
  currentPage: 1, // 目前在哪一頁
  currentSearchResult: [], // 目前在頁面上的搜尋結果列表
  searchResultHistory: {}, // 搜尋紀錄
}

export const pageInfoReducer = (state = initialState, action) => {
  // 更新頁面資訊，一次改寫
  switch (action.type) {
    case actionTypes.UPDATE_PAGE_INFO: {
      return { ...state, ...action.payload }
    }

    // 更新搜尋紀錄，action.payload = {[searchKeyword]: items}
    case actionTypes.UPDATE_SEARCH_RESULT_HISTORY: {
      return {
        ...state,
        searchResultHistory: {
          ...state.searchResultHistory,
          ...action.payload,
        },
      }
    }

    // 更新目前在頁面上的搜尋結果列表
    case actionTypes.UPDATE_CURRENT_SEARCH_RESULT: {
      return {
        ...state,
        currentResults: action.payload.length,
        currentSearchResult: action.payload,
      }
    }

    // 到某頁
    case actionTypes.GO_NTH_PAGE: {
      const { currentPage, totalPages } = state

      // 確保currentPage在合法範圍
      if (currentPage > 1 || currentPage < totalPages) {
        return { ...state, currentPage: action.payload }
      }
      return state
    }

    // 開啟loading動畫
    case actionTypes.OPEN_LOADER: {
      return { ...state, isLoading: true }
    }

    // 關閉loading動畫
    case actionTypes.CLOSE_LOADER: {
      return { ...state, isLoading: false }
    }

    default: {
      return state
    }
  }
}
