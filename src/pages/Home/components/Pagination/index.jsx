import React, { useState, useEffect } from 'react'
import * as S from './style'

import {
  sequenceArray,
  incrementElementBy1,
  decrementElementBy1,
} from '@utils'

const Pagination = ({ totalResults = 50, resultPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationRange, setPaginationRange] = useState([])

  // 到下一頁
  const goNextPage = () => setCurrentPage(current => current + 1)

  // 到上一頁
  const goPreviousPage = () => setCurrentPage(current => current - 1)

  // 到第n頁
  const goToPage = n => () => setCurrentPage(n)

  useEffect(() => {
    // 如果回傳筆數為0，return
    if (totalResults === 0) return

    // 1) 計算總頁數，無條件進位
    let paginationLength = Math.ceil(totalResults / resultPerPage)
    // 2) pagination最多一次顯示不超過3頁
    paginationLength = Math.min(paginationLength, 3)
    // 3) 設定pagination array，ex: [1, 2, 3]
    setPaginationRange(sequenceArray(paginationLength, 1))
  }, [totalResults, resultPerPage])

  useEffect(() => {
    // 如果paginationRange的長度為0，不執行接下來的步驟
    if (paginationRange.length === 0) return

    // 取得總頁數
    const paginationLength = Math.ceil(totalResults / resultPerPage)

    // 如果目前的分頁是paginationRange中最大，且小於總頁數，將陣列中每個元素加1
    if (
      currentPage === Math.max(...paginationRange) &&
      currentPage < paginationLength
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
  }, [currentPage, paginationRange, resultPerPage, totalResults])

  // 如果總筆數為0，不顯示pagination
  if (totalResults === 0) return null

  return (
    <S.Pagination>
      <S.PaginationToward
        disabled={currentPage === 1}
        onClick={goPreviousPage}
      >
        &laquo;
      </S.PaginationToward>
      {paginationRange.map(pageNum => (
        <S.PaginationNumber
          key={pageNum}
          disabled={pageNum === currentPage}
          onClick={goToPage(pageNum)}
        >
          {pageNum}
        </S.PaginationNumber>
      ))}
      <S.PaginationToward
        disabled={
          currentPage === Math.ceil(totalResults / resultPerPage)
        }
        onClick={goNextPage}
      >
        &raquo;
      </S.PaginationToward>
    </S.Pagination>
  )
}

export default Pagination
