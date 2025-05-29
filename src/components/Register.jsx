import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Assuming you're using Lucide or similar icons

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUppercase && hasLowercase && isValidLength;
  };

  const register = async () => {
    const { name, email, photoURL, password } = form;
    if (!validatePassword(password)) {
      Swal.fire(
        "Invalid Password",
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        "error"
      );
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, {
        displayName: name,
        photoURL,
      });
      Swal.fire("Success", "Registration successful!", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      Swal.fire("Success", "Logged in with Google!", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (

    <div className="max-w-md mx-auto p-6 mt-10 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl border border-gray-700 backdrop-blur-sm">
  <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
    Register
  </h2>

  <input
    type="text"
    name="name"
    placeholder="Name"
    value={form.name}
    onChange={handleChange}
    className="input input-bordered w-full mb-3 bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={form.email}
    onChange={handleChange}
    className="input input-bordered w-full mb-3 bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
  />
  <input
    type="text"
    name="photoURL"
    placeholder="Photo URL"
    value={form.photoURL}
    onChange={handleChange}
    className="input input-bordered w-full mb-3 bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
  />

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Password"
      value={form.password}
      onChange={handleChange}
      className="input input-bordered w-full mb-3 pr-10 bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
    />
    <span
      className="absolute right-3 top-3 cursor-pointer text-gray-400"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </span>
  </div>

  <button
    onClick={register}
    className="btn w-full mb-2 bg-amber-500 hover:bg-amber-600 text-white font-medium"
  >
    Register
  </button>
  <button
    onClick={handleGoogle}
    className="btn btn-outline w-full border-amber-500 text-amber-400 hover:bg-amber-600 hover:text-white"
  >
    Register with Google
  </button>

  <p className="text-center mt-4 text-gray-300">
    Already have an account?{" "}
    <Link to="/login" className="text-amber-400 hover:underline">
      Login here
    </Link>
  </p>
</div>

  );
}
