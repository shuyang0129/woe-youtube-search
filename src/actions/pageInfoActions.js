import * as actionTypes from '@constants/actionTypes'
import { searchVideo } from '@api'

export const search = searchKeyword => async (dispatch, getState) => {
  // 定義一個變數來存放搜尋結果
  let searchResult = null
  // 從Redux引入搜尋紀錄
  const { searchResultHistory } = getState()

  // 如果在搜尋紀錄中找到曾經搜尋過的紀錄，將對應結果賦給searchResult變數
  if (searchKeyword in searchResultHistory) {
    searchResult = searchResultHistory[searchKeyword]
  }

  // 如果搜尋紀錄中沒有找到對應紀錄，從API取得
  if (!searchResult) {
    dispatch(openLoader())

    const res = await searchVideo(searchKeyword)
      .catch(err => console.error(err))
      .finally(() => dispatch(closeLoader()))
    // 如果請求成功，將對應結果賦給searchResult變數
    if (res && res.status === 200) searchResult = res.data
  }

  // 如果從上面兩個方法中，有正確獲取到資料，執行if中的程序
  if (searchResult) {
    // 取得items(影片列表)、totalResults(總筆數)
    const {
      items,
      pageInfo: { totalResults },
    } = searchResult

    // 組成新的State
    const nePageInfo = {
      searchKeyword,
      totalResults,
      currentResults: items.length,
      totalPages: Math.ceil(totalResults / 10),
      currentPage: 1,
      currentSearchResult: items,
    }

    // 更新pageInfo
    dispatch(updatePageInfo(nePageInfo))

    // 新增搜尋紀錄
    dispatch(
      updateSearchResultHistory({
        [searchKeyword]: searchResult,
      })
    )
  }
}

export const updatePageInfo = newPageInfo => ({
  type: actionTypes.UPDATE_PAGE_INFO,
  payload: newPageInfo,
})

export const updateSearchResultHistory = newSearchResultHistory => ({
  type: actionTypes.UPDATE_SEARCH_RESULT_HISTORY,
  payload: newSearchResultHistory,
})

export const updateCurrentSearchResult = newCurrentSearchResult => ({
  type: actionTypes.UPDATE_CURRENT_SEARCH_RESULT,
  payload: newCurrentSearchResult,
})

export const goNthPage = nth => async (dispatch, getState) => {
  const {
    currentResults,
    totalResults,
    searchResultHistory,
    searchKeyword,
    totalPages,
  } = getState()

  // 超出總頁數，return
  if (nth > totalPages) return

  // 如果點擊的頁面超過redux中儲存的資料，並且還在總筆數範圍內，請求下一頁資料
  if (nth * 10 > currentResults && currentResults < totalResults) {
    const { nextPageToken, items } = searchResultHistory[
      searchKeyword
    ]

    dispatch(openLoader())

    const res = await searchVideo(searchKeyword, nextPageToken)
      .catch(err => console.error(err))
      .finally(() => dispatch(closeLoader()))

    // 如果請求成功，擴充搜尋紀錄中的對應的搜尋結果
    if (res && res.status === 200) {
      const newSearchResult = res.data
      newSearchResult.items = [...items, ...newSearchResult.items]

      // 更新搜尋紀錄
      dispatch(
        updateSearchResultHistory({
          [searchKeyword]: newSearchResult,
        })
      )

      // 更新目前在頁面上的搜尋結果列表
      dispatch(updateCurrentSearchResult(newSearchResult.items))
    }
  }

  // 到下一頁
  dispatch({
    type: actionTypes.GO_NTH_PAGE,
    payload: nth,
  })
}

// 開啟loading動畫
export const openLoader = nth => ({
  type: actionTypes.OPEN_LOADER,
})

// 關閉loading動畫
export const closeLoader = nth => ({
  type: actionTypes.CLOSE_LOADER,
})
