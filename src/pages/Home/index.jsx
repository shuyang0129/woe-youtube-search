import React, { useRef, useCallback } from 'react'

import SearchResult from './components/SearchResult'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination'
import Loader from '@components/Loader'

import * as S from './style'

const Home = () => {
  const contentRef = useRef()

  /**
   * @name scrollToTop
   * @description 回到最頁面最上方，在每次渲染新搜尋結果或切換分頁時執行使用
   */
  const scrollToTop = useCallback(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [])

  return (
    <S.Container>
      <SearchBar />
      <S.MainContent ref={contentRef}>
        <Loader>
          <SearchResult scrollToTop={scrollToTop} />
          <Pagination />
        </Loader>
      </S.MainContent>
    </S.Container>
  )
}

export default Home
