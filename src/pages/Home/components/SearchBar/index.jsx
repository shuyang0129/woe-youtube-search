import React, { useState } from 'react'
import * as S from './style'

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const updateSearchKeyword = e => {
    // 防止開頭輸入空白
    const input = e.target.value.replace(/^\s*/, '')

    setSearchKeyword(input)
  }

  const submitSearchKeyword = () => {
    // 1) 取得使用者欲搜尋的關鍵字
    const keyword = searchKeyword.trim()
    // 2) 清空輸入框
    setSearchKeyword('')
    // TODO: 搜尋
    console.log(keyword)
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
