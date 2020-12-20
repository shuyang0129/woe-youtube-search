import * as actionTypes from '@constants/actionTypes'
import { searchVideo } from '@api'

export const search = searchKeyword => async dispatch => {
  console.log(
    '🚀 ~ file: pageInfoActions.js ~ line 4 ~ searchKeyWord',
    searchKeyword
  )
  try {
    const res = await searchVideo(searchKeyword)
    console.log('🚀 ~ file: pageInfoActions.js ~ line 11 ~ res', res)

    if (res.status === 200) {
      const {
        items,
        pageInfo: { totalResults, resultsPerPage },
      } = res.data

      // TODO: Remove Math.min(35, x)
      const newState = {
        searchKeyword,
        totalResults: Math.min(35, totalResults),
        totalPages: Math.min(
          4,
          Math.ceil(totalResults / resultsPerPage)
        ),
        currentPage: 1,
        currentSearchResult: items,
        searchResultHistory: {
          [encodeURIComponent(searchKeyword)]: items,
        },
      }

      return dispatch({
        type: actionTypes.UPDATE_PAGE_INFO,
        payload: newState,
      })
    }
  } catch (error) {}
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
