import React, { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../src/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = async () => {
    if (!email) {
      Swal.fire("Error", "Please enter your email", "error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire(
        "Check your inbox",
        "Password reset email sent successfully!",
        "success"
      );
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 1500);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return ( 
    <div className="p-8 max-w-md mx-auto  bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl border border-gray-700 backdrop-blur-sm mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
          Forgot Password?
        </h2>
      </div>
      <div className="space-y-6">
        <div>
          <label htmlFor="email-forgot" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            id="email-forgot"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="appearance-none block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-150 ease-in-out sm:text-sm"
          />
        </div>

        <div>
          <button
            onClick={handleReset}
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150 ease-in-out transform hover:scale-105 md:py-3 md:text-lg md:px-10"
          >
            Send Reset Link
          </button>
        </div>
      </div>
    </div>

  );
}
