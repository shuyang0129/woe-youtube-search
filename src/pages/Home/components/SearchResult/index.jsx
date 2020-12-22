import React, { useState, useEffect, memo } from 'react'
import { useSelector } from 'react-redux'

import * as S from './style'

const SearchResult = ({ scrollToTop }) => {
  const { currentSearchResult, currentPage } = useSelector(
    state => state
  )
  const [displaySearchResult, setDisplaySearchResult] = useState([])

  useEffect(() => {
    // 每次顯示新分頁內容時，回到頁面上方
    scrollToTop()

    // 取得slice所需起始值
    const begin = (currentPage - 1) * 10
    const end = (currentPage - 1) * 10 + 10

    // 更新當前影片列表
    setDisplaySearchResult(currentSearchResult.slice(begin, end))
  }, [
    currentPage,
    setDisplaySearchResult,
    currentSearchResult,
    scrollToTop,
  ])

  // Component | 單一搜尋結果的元件
  const SearchResultItem = ({ item }) => {
    const {
      id: { videoId },
      snippet: { title, thumbnails },
    } = item

    return (
      <S.SearchResultItem
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="blank"
      >
        <img src={thumbnails.high.url} alt={title} />
        <h3>{title}</h3>
      </S.SearchResultItem>
    )
  }

  // 如果搜尋結果為0，顯示無資料
  if (currentSearchResult.length === 0)
    return <S.EmptyResult>No Results</S.EmptyResult>

  return (
    <S.SearchResult>
      {displaySearchResult.map(searchResultItem => (
        <SearchResultItem
          item={searchResultItem}
          key={searchResultItem.id.videoId}
        />
      ))}
    </S.SearchResult>
  )
}

export default memo(SearchResult)
