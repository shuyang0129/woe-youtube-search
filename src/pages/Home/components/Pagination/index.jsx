import React from 'react'
import * as S from './style'

const Pagination = () => {
  return (
    <S.Pagination>
      <S.PaginationItem>&laquo;</S.PaginationItem>
      <S.PaginationItem active>1</S.PaginationItem>
      <S.PaginationItem>2</S.PaginationItem>
      <S.PaginationItem>3</S.PaginationItem>
      <S.PaginationItem disabled>&raquo;</S.PaginationItem>
    </S.Pagination>
  )
}

export default Pagination
