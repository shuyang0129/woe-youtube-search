import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import LoadingIcon from '@assets/images/icon__loading.svg'

import * as S from './style'

// Loading狀態開啟時，選染spinner
const Loader = ({ children }) => {
  const { isLoading } = useSelector(state => state)

  return isLoading ? (
    <S.Loading src={LoadingIcon} alt="loading" />
  ) : (
    <Fragment>{children}</Fragment>
  )
}

export default Loader
