import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { PAGE_INFO } from '@constants/storage'
import { updatePageInfo } from '@actions/pageInfoActions'

import Home from '@pages/Home'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedPageInfo = JSON.parse(localStorage.getItem(PAGE_INFO))

    if (storedPageInfo) dispatch(updatePageInfo(storedPageInfo))
  }, [dispatch])

  return <Home />
}

export default App
