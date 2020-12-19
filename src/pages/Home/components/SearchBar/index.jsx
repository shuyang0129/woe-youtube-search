import React from 'react'
import * as S from './style'

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBar>
        <S.SearchBarInput placeholder="Search by keywords" />
        <S.SearchBarButton disabled />
      </S.SearchBar>
    </S.SearchBarContainer>
  )
}

export default SearchBar
