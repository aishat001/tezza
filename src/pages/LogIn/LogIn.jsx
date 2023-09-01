import React, { useState } from 'react'
import { H2, P } from '../../components/Typography'
import { Button, Input, InputLabel } from '@mui/material'
import './Login.css'
import { useNavigate } from 'react-router'

const LoginIn = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }


  const isValidPassword = (password) => {
    return password.length >= 8;
  }

  const validation = (type, value) => {
    if (type === 'password') {
      if (value === '') {
        setPasswordError(""); // Set error to null if input is empty
      } else if (!isValidPassword(value)) {
        setPasswordError('Password must be 8 or more characters');
      } else {
        setPasswordError('');
      }
    } else if (!isValidEmail(value)) {
      setEmailError('Invalid Email');
    } else {
      setEmailError('');
    }


  }

  const handleSubmit = () => {
    const { email, password } = formData;

    if (isValidEmail(email) && isValidPassword(password)) {
      localStorage.setItem('authenticated', 'true');
      
      navigate('/worspace');
    } else {
      console.error('Authentication failed');
    }
  };

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    validation(type, value)
  };


  return (
    <div>

      <div className='loginBg w-[100%] h-[100vh] flex sm:justify-center sm:items-center'>

        <form className='w-[100%] p-5 sm:p-10 sm:shadow-lg max-w-[500px] sm:w-[500px] sm flex flex-col gap-7 mt-20  m-auto bg-white' onSubmit={handleSubmit}>
          <div className='flex flex-row items-center justify-between mb-3'>
            <div>
              <H2>Log In</H2>
              <p className='text-sm font-[500]'>Login to your account</p>
            </div>
            <img src='/logo.png' alt='logo' width={70} height={70} />
          </div>

          <div>
            <InputLabel>Email</InputLabel>
            <Input type='email' disableUnderline
              sx={{
                border: '1px solid black',
                width: '100%'
              }}
              name='email'
              value={formData.email}

              onChange={handleChange}
            />
            {emailError && (<p className='text-[12px] text-[red]'>{emailError}</p>)} 
                     </div>

          <div>
            <InputLabel>Password</InputLabel>
            <Input type='password' disableUnderline
              sx={{
                border: '1px solid black',
                width: '100%'
              }}
              name='password'
              value={formData.password}
              onChange={handleChange} />
                          {[passwordError] && (<p className='text-[12px] text-[red]'>{passwordError}</p>)} 

          </div>

          <Button type='submit' disabled={!isValidEmail(formData.email) || !isValidPassword(formData.password)} className={` ${isValidEmail(formData.email) && isValidPassword(formData.password) ? 'buttonActive' : null} !text-white w-[100%] sm:w-[200px] !mx-auto font-[500]`}>Log in</Button>
        </form>
      </div>
    </div>
  )
}

export default LoginIn