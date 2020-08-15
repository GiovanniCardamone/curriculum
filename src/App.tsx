import React from 'react'
import './App.css'

import Papers from './components/Papers'
import PrintButton from './components/PrintButton'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

function App() {
  return (
    <div className='App'>
      <Papers papers={[<FirstPage />, <SecondPage />, <ThirdPage />]} />
      <PrintButton onClick={() => {}} />
    </div>
  )
}

export default App
