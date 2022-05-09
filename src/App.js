import React, {Suspense} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import {Routes, Route} from 'react-router-dom'
import './App.css'


// 用 React.lazy 进行代码分割
const Home = React.lazy(() => import('./pages/Home.js')
  .then((module) => ({default: module.Home})))
const History = React.lazy(() => import('./pages/History.js')
  .then(module => ({default: module.History})))
const Login = React.lazy(() => import('./pages/Login.js')
  .then(module => ({default: module.Login})))
const Register = React.lazy(() => import('./pages/Register.js')
  .then(module => ({default: module.Register})))


function App() {
  return (
    <>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/history" element={<History/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default App
