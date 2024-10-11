import React, { useState } from 'react';
import './Login.css';
import { FaUserCheck} from "react-icons/fa";
import { RiLockPasswordFill, RiContactsFill } from "react-icons/ri";
import { MdOutlineAlternateEmail, MdDateRange, MdWork } from "react-icons/md";

const Login = ({ onLogin, onRegister }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    else if (name === 'login') setLogin(value);
    else if (name === 'password') setPassword(value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    onLogin(e, login, password);  // Pass login details to parent component
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    onRegister(e, email, login, password);  // Pass registration details to parent
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          {/* SIGN-IN */}
          <form className='sign-in-form' onSubmit={onSubmitLogin}>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <MdOutlineAlternateEmail className='icon' />
              <input
                type='email'
                placeholder='Email'
                name="email"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <RiLockPasswordFill className='icon' />
              <input
                type='password'
                placeholder='Password'
                name="password"
                required
                onChange={onChangeHandler}
              />
            </div>
            <input type='submit' value='Login' className='btn solid' />
          </form>
          {/* SIGN-UP */}
          <form className='sign-up-form' onSubmit={onSubmitRegister}>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <FaUserCheck className='icon' />
              <input
                type='text'
                placeholder='Full Name'
                name="fullName"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <RiContactsFill className='icon' />  {/* Use the contact icon here */}
              <input
                placeholder='Contact'
                name="contact"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <MdOutlineAlternateEmail className='icon' />
              <input
                type='email'
                placeholder='Email'
                name="email"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <MdDateRange className='icon' />  {/* Use the date icon */}
              <input
                type='date'
                name="date"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <MdWork className='icon' />  {/* Use the role icon */}
              <input
                type='text'
                placeholder='Role'
                name="role"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <RiLockPasswordFill className='icon' />
              <input
                type='password'
                placeholder='Password'
                name="password"
                required
                onChange={onChangeHandler}
              />
            </div>
            <input type='submit' value='Sign up' className='btn solid' />
          </form>
        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h3>New here?</h3>
              <button className='btn transparent set' onClick={() => setIsSignUp(true)}>Signup</button>
            </div>
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h3>Already a member?</h3>
              <button className='btn transparent set' onClick={() => setIsSignUp(false)}>Signin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
