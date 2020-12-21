import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as S from './style'

const SearchResult = () => {
  const { currentSearchResult, currentPage } = useSelector(
    state => state
  )
  const [displaySearchResult, setDisplaySearchResult] = useState([])

  useEffect(() => {
    const begin = (currentPage - 1) * 10 + 1
    const end = (currentPage - 1) * 10 + 10 + 1

    setDisplaySearchResult(currentSearchResult.slice(begin, end))
  }, [currentPage, setDisplaySearchResult, currentSearchResult])

  const renderSearchResultItem = searchResultItem => {
    const {
      id: { videoId },
      snippet: { title, thumbnails },
    } = searchResultItem

    return (
      <S.SearchResultItem
        key={videoId}
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="blank"
      >
        <img src={thumbnails.high.url} alt={title} />
        <h3>{title}</h3>
      </S.SearchResultItem>
    )
  }

  if (!currentSearchResult) return null

  return (
    <S.SearchResult>
      {displaySearchResult.map(searchResultItem => {
        return <>{renderSearchResultItem(searchResultItem)}</>
      })}
    </S.SearchResult>
  )
}

export default SearchResult
