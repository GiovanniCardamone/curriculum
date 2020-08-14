import React from 'react'
import logo from './logo.svg'
import './App.css'

import Papers from './components/Papers'
import PageA4 from './components/PageA4'
import PrintButton from './components/PrintButton'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

function App() {
  return (
    <div className='App'>
      current in development! Hang on :)
      {/* <Papers papers={[<FirstPage />, <SecondPage />, <ThirdPage />]} />
      <PrintButton onClick={() => {}} /> */}
    </div>
  )
}

export default App
