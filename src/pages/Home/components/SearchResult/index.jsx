import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as S from './style'

const SearchResult = () => {
  const { currentSearchResult, currentPage } = useSelector(
    state => state
  )
  const [displaySearchResult, setDisplaySearchResult] = useState([])

  useEffect(() => {
    const begin = (currentPage - 1) * 10
    const end = (currentPage - 1) * 10 + 10

    setDisplaySearchResult(currentSearchResult.slice(begin, end))
  }, [currentPage, setDisplaySearchResult, currentSearchResult])

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

export default SearchResult
