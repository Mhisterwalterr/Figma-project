import React from 'react'
import logo from '../../assets/aptech.svg'
import Button from '../../Component/Button/Button'
import './Login.css'
// import NavBar from '../../Component/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    
    <div className='loginContainer'>
        <div>
            {/* <NavBar /> */}
        </div>
        <nav className='loginContainerNav'>
            <div className='loginLogo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='loginButton'>
                <div>
                   <button>Login</button>
                </div>
                <div>
                    <button>Sign up</button>
                </div>
            </div>
        </nav>
        <div className='loginContainerBody'>
            <div className='loginInput'>
                <label htmlFor="Email address" className='emailLabel'>Email address  </ label> <br></br>
                <input type="text" /> 
            </div>
        <div className='loginInput'>
            <label htmlFor="Password">Password</label> <br></br>
            <input type="text"/>
        </div> 

        <div className='fpColor'> 
            <h3>Forget passcode?</h3>
        </div>
        

        <div className='loginBtn'>
            {/* <Link to={'/menu'}> */}
            {/* <Button name={'Login'} bgcolor='#ffc83a' color='black' textSize={'18px'} /></Link> */}
            <Button name='Login' bgcolor='#ffc83a' color='black' onClick={ ()=> navigate('/menu')} />
            
        
        </div>

        </div>
        
    </div>
  )
}

export default Login