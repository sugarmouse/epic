import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.scss'
import {AfterLoginLayout} from './pages/AfterLoginPage/AfterLoginLayout'
import {LogAndRegister} from './pages/LogAndRegister'
import {Home} from './pages/AfterLoginPage/Home'
import {History} from './pages/AfterLoginPage/History'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogAndRegister/>}/>
      <Route path="/in/" element={<AfterLoginLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="history" element={<History/>}/>
      </Route>
    </Routes>
  )
}

export default App
