/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import GoogleButton from 'react-google-button';
import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions.js';
import { useMediaQuery } from 'react-responsive';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInfo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          spellCheck='false'
          autoComplete='on'
          name='email'
          label='Email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          spellCheck='false'
          autoComplete='on'
          name='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <button type='submit' className='custom-button sign-in-button'>
            SIGN IN
          </button>
          {isMobile ? (
            <span
              style={{
                // MOBILE STYLES
                display: 'inline-block',
                marginLeft: '25px',
                paddingTop: '10px',
                position: 'relative',
                bottom: '2.5px',
                fontSize: '1.15rem',
                fontWeight: 'bolder',
                right: '10px',
              }}
            >
              OR
            </span>
          ) : (
            <span
              style={{
                display: 'inline-block',
                marginLeft: '25px',
                paddingTop: '10px',
                position: 'relative',
                bottom: '2.5px',
                fontSize: '1.15rem',
                fontWeight: 'bold',
              }}
            >
              OR
            </span>
          )}
          <div
            style={{
              display: 'inline-block',
              marginLeft: '25px',
              paddingTop: '10px',
              position: 'relative',
              bottom: '9px',
              borderRadius: '5px',
            }}
          >
            {isMobile ? (
              <GoogleButton
                className='google-button'
                type='dark'
                label='Sign in with Google'
                onClick={googleSignInStart}
                style={{
                  // MOBILE STYLES
                  width: '165px',
                  fontSize: '13.25px',
                  position: 'relative',
                  right: '19px',
                }}
              />
            ) : (
              <GoogleButton
                className='google-button'
                type='dark'
                label='Sign in with Google'
                onClick={googleSignInStart}
                style={{ borderRadius: '5px' }}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
