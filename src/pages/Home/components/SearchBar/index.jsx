import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { search } from '@actions/pageInfoActions'

import * as S from './style'

const SearchBar = () => {
  const dispatch = useDispatch()

  const { isLoading, searchKeyword } = useSelector(state => state)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    // 畫面重新載入時，將搜尋輸入框的值與redux存取的searchKeyword同步
    setKeyword(searchKeyword)
  }, [searchKeyword])

  // 更新輸入框的值
  const updateSearchKeyword = e => setKeyword(e.target.value)

  // 送出搜尋關鍵字，觸發搜尋行為
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
