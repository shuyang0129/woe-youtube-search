import * as actionTypes from '@constants/actionTypes'
import { searchVideo } from '@api'

export const search = searchKeyword => async (dispatch, getState) => {
  // 定義一個變數來存放搜尋結果
  let searchResult = null
  // 從Redux引入搜尋紀錄
  const { searchResultHistory } = getState()

  // 如果在搜尋紀錄中找到曾經搜尋過的紀錄，將對應結果賦給searchResult變數
  if (encodeURIComponent(searchKeyword) in searchResultHistory) {
    searchResult =
      searchResultHistory[encodeURIComponent(searchKeyword)]
  }

  // 如果搜尋紀錄中沒有找到對應紀錄，從API取得
  if (!searchResult) {
    const res = await searchVideo(searchKeyword).catch(err => {
      console.error(err)
    })
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
    const newState = {
      searchKeyword,
      totalResults,
      totalPages: Math.ceil(totalResults / 10),
      currentPage: 1,
      currentSearchResult: items,
    }

    // 更新pageInfo
    dispatch({
      type: actionTypes.UPDATE_PAGE_INFO,
      payload: newState,
    })

    // 新增搜尋紀錄
    dispatch({
      type: actionTypes.UPDATE_SEARCH_RESULT_HISTORY,
      payload: {
        [encodeURIComponent(searchKeyword)]: searchResult,
      },
    })
  }
}

export const goNextPage = () => ({
  type: actionTypes.GO_NEXT_PAGE,
})

export const goPreviousPage = () => ({
  type: actionTypes.GO_PREVIOUS_PAGE,
})

export const goNthPage = nth => ({
  type: actionTypes.GO_NTH_PAGE,
  payload: nth,
})
