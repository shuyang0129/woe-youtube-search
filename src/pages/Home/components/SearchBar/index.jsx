import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { search } from '@actions/pageInfoActions'

import * as S from './style'

const SearchBar = () => {
  const { isLoading, searchKeyword } = useSelector(state => state)
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setKeyword(searchKeyword)
  }, [searchKeyword])

  const updateSearchKeyword = e => {
    const input = e.target.value

    setKeyword(input)
  }

  const submitSearchKeyword = () => dispatch(search(keyword))

  return (
    <S.SearchBarContainer>
      <S.SearchBar>
        <S.SearchBarInput
          value={keyword}
          placeholder="Search by keywords"
          onChange={updateSearchKeyword}
        />
        <S.SearchBarButton
          disabled={isLoading}
          onClick={submitSearchKeyword}
        />
      </S.SearchBar>
    </S.SearchBarContainer>
  )
}

export default SearchBar
