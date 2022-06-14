import cameraUrl from '../assets/img/camera.svg'
import computerUrl from '../assets/img/computer.svg'
import MS from './LogAndRegister.module.scss'
import {useState} from 'react'
import {Login} from '../components/Login'
import {Register} from '../components/Register'


export const LogAndRegister = () => {
  const [mode, setMode] = useState(MS.signInMode)

  const handleTransSignInClick = () => {
    console.log('sign in mode')
    setMode(MS.signInMode)
  }
  const handleTransSignUpClick = () => {
    console.log('sign up mode')
    setMode(MS.signUpMode)
  }


  return (
    <div className={MS.container+' '+mode}>
      <div className={MS.formsContainer}>
        <div className={MS.signInSignUp}>
          <div  className={MS.signInForm}>
            <h2 className={MS.title}>登陆</h2>
            <Login/>
          </div>

          <div className={MS.signUpForm}>
            <h2 className={MS.title}>注册</h2>
            <Register/>
          </div>
        </div>
      </div>

      <div className={MS.panelsContainer}>

        <div className={MS.panel + ' ' + MS.leftPanel}>
          <div className={MS.content}>
            <h3>新用户？</h3>
            <button className={MS.btn + ' ' + MS.transparent} onClick={handleTransSignUpClick}>注册</button>
          </div>
          <img src={cameraUrl} className={MS.image} alt=""/>
        </div>

        <div className={MS.panel + ' ' + MS.rightPanel}>
          <div className={MS.content}>
            <h3>已经有账号？</h3>
            <button className={MS.btn + ' ' + MS.transparent} onClick={handleTransSignInClick}>登陆</button>
          </div>
          <img src={computerUrl} className={MS.image} alt=""/>
        </div>
      </div>

    </div>

  )
}