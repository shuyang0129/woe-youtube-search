import React from 'react'

import SearchResult from './components/SearchResult'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination'

import * as S from './style'

const Home = () => {
  return (
    <S.Container>
      <SearchBar />
      <S.MainContent>
        <SearchResult />
        <Pagination />
      </S.MainContent>
    </S.Container>
  )
}

export default Home
