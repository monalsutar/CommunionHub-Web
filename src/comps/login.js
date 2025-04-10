import React from "react";
import "./login.css";
import logo from "../assets/logo.png"; // Update with your logo path
import sideImg from "../assets/img11.jpg"

export default function Login() {
  return (
    <div className="flex w-full h-full">
      <div className="w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md p-12 space-y-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <img src={logo} alt="Communion logo" className="h-8 w-45" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Enter your login details to sign in</p>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Your email or username</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email or username" />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your password" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <i className="fas fa-eye text-gray-500"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot Password?</a>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <i className="fas fa-sign-in-alt"></i>
                </span>
                Sign In
              </button>
            </div>
            <div className="text-center text-sm text-gray-600">
              Don't have an account yet? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
            </div>
            
            <div>
              <button type="button" className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <img src="https://storage.googleapis.com/a1aa/image/Xc6NC7tcjNkibwvhAljfdVzOsdsIG8anfTGg1Gk9R0w.jpg" alt="Google logo" className="h-5 w-5" />
                </span>
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-3/5">
        <img src={sideImg} alt="Decorative image" className="w-full h-full object-cover" />
      </div>
    </div>

  );
}
