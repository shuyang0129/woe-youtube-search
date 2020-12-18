import React, { useEffect } from 'react'

import { searchVideo } from '@api'

const App = () => {
  useEffect(() => {
    // searchVideo('snippet').then(res => console.log(res))
  }, [])

  return <div>Appppp${process.env.REACT_APP_KEY}</div>
}

export default App
