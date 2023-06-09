'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/auth/useAuth';

const LoginScreen = () => {
  const { register, login } = useAuth();
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-semibold mb-1">Login</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are a returning customer
        </p>
        <form onSubmit={login}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
                placeholder="Enter your email address"
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
                placeholder="Enter your password"
                {...register('password', { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            {/* <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                {...register('remember')}
              />
              <label
                htmlFor='remember'
                className='text-gray-600 cursor-pointer'
              >
                Remember me
              </label>
            </div> */}
            <Link href="/forget-password" className="text-primary">
              Forget password
            </Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full block focus:outline-none py-2 text-center bg-primary text-white border border-primary hover:bg-transparent hover:text-primary rounded transition uppercase font-medium shadow-lg"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute w-full left-0 top-3 border-b-2 border-gray-200" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {/* <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            buttonText="Login"
            autoLoad={false}
            onSuccess={googleSignInHandler}
            onFailure={googleSignInHandler}
            cookiePolicy={'single_host_origin'}
            render={(props) => (
              <button
                className={`w-full focus:outline-none flex justify-center items-center gap-2 px-5 py-2 border-2 hover:bg-gray-50 text-gray-600 border-gray-100 rounded-md transition-colors duration-300 ${
                  props.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={props.onClick}
                disabled={props.disabled}
              >
                {props.disabled ? (
                  <Spinner
                    type="ThreeDots"
                    color="#333"
                    height={25}
                    width={35}
                  />
                ) : (
                  <>
                    <img
                      className="w-7"
                      src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                    />
                  </>
                )}
                <span>Google</span>
              </button>
            )}
          />
          <FacebookLogin
            appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={facebookSignInHandler}
            render={(props) => (
              <button
                className={`w-full focus:outline-none flex justify-center items-center gap-2 px-5 py-2 border-2 hover:bg-gray-50 text-gray-600 border-gray-100 rounded-md transition-colors duration-300 ${
                  props.disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={props.onClick}
                disabled={props.disabled}
              >
                {props.disabled ? (
                  <Spinner
                    type="ThreeDots"
                    color="#333"
                    height={25}
                    width={35}
                  />
                ) : (
                  <img
                    className="w-7"
                    src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                  />
                )}
                <span>Facebook</span>
              </button>
            )}
          /> */}
        </div>
        <p className="mt-6 text-gray-600 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
