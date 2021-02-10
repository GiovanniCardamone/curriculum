import React from 'react'
import './App.css'

import Papers from './components/Papers'
import PrintButton from './components/PrintButton'
import WindowControls from './components/WindowControls'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

function App() {
  return (
    <div className='App'>
      <Papers>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
      </Papers>

      <WindowControls>
        <PrintButton onClick={() => {}} />
      </WindowControls>
    </div>
  )
}

export default App
