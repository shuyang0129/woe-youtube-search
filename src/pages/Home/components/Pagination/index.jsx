import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'

import {
  goNextPage,
  goPreviousPage,
  goNthPage,
} from '@actions/pageInfoActions'
import {
  sequenceArray,
  incrementElementBy1,
  decrementElementBy1,
} from '@utils'

const Pagination = () => {
  const [paginationRange, setPaginationRange] = useState([])
  const { totalPages, currentPage } = useSelector(state => state)
  const dispatch = useDispatch()

  // 到下一頁
  const goToNextPage = () => dispatch(goNextPage())

  // 到上一頁
  const goToPreviousPage = () => dispatch(goPreviousPage())

  // 到第n頁
  const goToNthPage = n => () => dispatch(goNthPage(n))

  useEffect(() => {
    // 如果總頁數為0，return
    if (!totalPages) return

    // 1) pagination最多一次顯示不超過3頁
    const paginationLength = Math.min(totalPages, 3)
    console.log(
      '🚀 ~ file: index.jsx ~ line 37 ~ useEffect ~ paginationLength',
      paginationLength
    )
    // 2) 設定pagination array，ex: [1, 2, 3]
    setPaginationRange(sequenceArray(paginationLength, 1))
  }, [totalPages])

  useEffect(() => {
    // 如果paginationRange的長度為0，不執行接下來的步驟
    if (totalPages === 0 || paginationRange.length === 0) return

    // 如果目前的分頁是paginationRange中最大，且小於總頁數，將陣列中每個元素加1
    if (
      currentPage === Math.max(...paginationRange) &&
      currentPage < totalPages
    ) {
      return setPaginationRange(incrementElementBy1)
    }

    // 如果目前的分頁是paginationRange中最小，且大於1，將陣列中每個元素減1
    if (
      currentPage === Math.min(...paginationRange) &&
      currentPage > 1
    ) {
      return setPaginationRange(decrementElementBy1)
    }
  }, [currentPage, paginationRange, totalPages])

  // 如果總頁數為0，不顯示pagination
  if (totalPages === 0) return null

  return (
    <S.Pagination>
      <S.PaginationToward
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        &laquo;
      </S.PaginationToward>
      {paginationRange.map(pageNum => (
        <S.PaginationNumber
          key={pageNum}
          disabled={pageNum === currentPage}
          onClick={goToNthPage(pageNum)}
        >
          {pageNum}
        </S.PaginationNumber>
      ))}
      <S.PaginationToward
        disabled={currentPage === totalPages}
        onClick={goToNextPage}
      >
        &raquo;
      </S.PaginationToward>
    </S.Pagination>
  )
}

export default Pagination
