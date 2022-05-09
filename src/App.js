import React, {Suspense, useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import {isMobile} from './lib/isMobile'


// 用 React.lazy 进行代码分割
const Home = React.lazy(() => import('./pages/Home.js')
  .then(module => ({default: module.Home})))
const History = React.lazy(() => import('./pages/History.js')
  .then(module => ({default: module.History})))
const Login = React.lazy(() => import('./pages/Login.js')
  .then(module => ({default: module.Login})))
const Register = React.lazy(() => import('./pages/Register.js')
  .then(module => ({default: module.Register})))

export const IsMobileContext = React.createContext(false)


function App() {

  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    setMobile(() => isMobile())
    window.onresize = () => {
      setMobile(() => isMobile())
      console.log(mobile)
    }
  }, [])


  return (
    <IsMobileContext.Provider value={mobile}>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </IsMobileContext.Provider>
  )
}

export default App
