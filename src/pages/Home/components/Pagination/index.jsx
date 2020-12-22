import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './style'

import { goNthPage } from '@actions/pageInfoActions'
import { sequenceArray } from '@utils'

const Pagination = () => {
  const dispatch = useDispatch()

  const [paginationRange, setPaginationRange] = useState([])
  const { totalPages, currentPage } = useSelector(state => state)

  // 到第n頁
  const goToNthPage = nth => () => dispatch(goNthPage(nth))

  useEffect(() => {
    // 如果總頁數為0，return
    if (!totalPages) return

    // 1) pagination最多一次顯示不超過3頁
    const paginationLength =
      currentPage > 5 ? currentPage : Math.min(totalPages, 5)
    // 2) 設定pagination array，ex: [1, 2, 3]
    setPaginationRange(sequenceArray(paginationLength, 1))
  }, [totalPages, currentPage])

  useEffect(() => {
    // 如果paginationRange的長度為0，不執行接下來的步驟
    if (totalPages === 0 || paginationRange.length === 0) return

    // 如果目前的分頁是paginationRange中最大，且小於總頁數，將陣列中多新增下一頁
    if (
      currentPage === Math.max(...paginationRange) &&
      currentPage < totalPages
    ) {
      return setPaginationRange(sequenceArray(currentPage + 1, 1))
    }
  }, [currentPage, paginationRange, totalPages])

  // 如果總頁數為0，不顯示pagination
  if (totalPages === 0) return null

  return (
    <S.PaginationContainer>
      <S.Pagination>
        {paginationRange.map(pageNum => (
          <S.PaginationNumber
            key={pageNum}
            disabled={pageNum === currentPage}
            onClick={goToNthPage(pageNum)}
          >
            {pageNum}
          </S.PaginationNumber>
        ))}
      </S.Pagination>
    </S.PaginationContainer>
  )
}

export default memo(Pagination)
