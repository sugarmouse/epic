import React, {Suspense, useEffect, useState} from 'react'
import Loading from './components/Loading'
import {Routes, Route} from 'react-router-dom'
import './App.less'
import {isMobile} from './lib/isMobile'
import {IndexLayout} from './pages/IndexLayout'
import {AfterLoginLayout} from './pages/AfterLoginPage/AfterLoginLayout'
import {FirstPage} from './pages/IndexPage/FirstPage'


// 用 React.lazy 进行代码分割
const Home = React.lazy(() => import('./pages/AfterLoginPage/Home.js')
  .then(module => ({default: module.Home})))
const History = React.lazy(() => import('./pages/AfterLoginPage/History.js')
  .then(module => ({default: module.History})))
const Login = React.lazy(() => import('./pages/IndexPage/Login.js')
  .then(module => ({default: module.Login})))
const Register = React.lazy(() => import('./pages/IndexPage/Register.js')
  .then(module => ({default: module.Register})))

export const IsMobileContext = React.createContext(false)


function App() {

  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(() => isMobile())
    window.onresize = () => {
      setMobile(() => isMobile())
    }
  }, [])

  return (
    <IsMobileContext.Provider value={mobile}>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<IndexLayout/>}>
            <Route index element={<FirstPage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
          <Route path="in/" element={<AfterLoginLayout/>}>
            <Route index  element={<Home/>}/>
            <Route path="history" element={<History/>}/>
          </Route>
        </Routes>
      </Suspense>
    </IsMobileContext.Provider>
  )
}

export default App
