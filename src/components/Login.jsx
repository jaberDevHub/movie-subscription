
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true }); 
    } catch (error) {
      alert(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true }); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
   <div className="p-8 max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl border border-gray-700 backdrop-blur-sm">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
      Welcome Back
    </h2>
    <p className="text-gray-400">Sign in to Subscribe your favorite services</p>
  </div>

  <div className="space-y-5">
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
      />
    </div>

    <button
      onClick={loginWithEmail}
      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
    >
      Sign In
    </button>

    <div className="relative flex items-center my-6">
      <div className="flex-grow border-t border-gray-700"></div>
      <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
      <div className="flex-grow border-t border-gray-700"></div>
    </div>

    <button
      onClick={loginWithGoogle}
      className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-medium border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
      Continue with Google
    </button>

    <div className="flex items-center justify-between mt-4">
      <Link
        to="/forgot-password"
        state={{ email }}
        className="text-sm text-amber-400 hover:text-amber-300 hover:underline transition-colors duration-300"
      >
        Forgot Password?
      </Link>
      <Link
        to="/register"
        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
      >
        Need an account? <span className="text-amber-400 hover:underline">Sign up</span>
      </Link>
    </div>
  </div>


</div>
  );
}
