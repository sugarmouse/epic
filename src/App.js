import React, { Suspense } from 'react'
import Header from './components/Header';
import Footer from './components/footer';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';
import './App.css'

const Home = React.lazy(() => import('./pages/Home.js'))
const History = React.lazy(() => import('./pages/History.js'))
const About = React.lazy(() => import('./pages/About.js'))
const Login = React.lazy(() => import('./pages/Login.js'))
const Register = React.lazy(() => import('./pages/Register.js'))


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
export default App;
