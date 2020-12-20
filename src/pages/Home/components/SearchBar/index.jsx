import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { search } from '@actions/pageInfoActions'

import * as S from './style'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const dispatch = useDispatch()

  const updateSearchKeyword = e => {
    const input = e.target.value

    setSearchKeyword(input)
  }

  const submitSearchKeyword = () => {
    // 1) 取得使用者欲搜尋的關鍵字
    const keyword = searchKeyword.trim()
    // 2) 搜尋
    dispatch(search(keyword))
  }

  return (
    <S.SearchBarContainer>
      <S.SearchBar>
        <S.SearchBarInput
          value={searchKeyword}
          placeholder="Search by keywords"
          onChange={updateSearchKeyword}
        />
        <S.SearchBarButton
          disabled={searchKeyword.length === 0}
          onClick={submitSearchKeyword}
        />
      </S.SearchBar>
    </S.SearchBarContainer>
  )
}

export default SearchBar
