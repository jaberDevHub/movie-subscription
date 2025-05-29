import React, { useState } from "react";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export default function Profile() {
  const currentUser = auth.currentUser;
  const [name, setName] = useState(currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(currentUser, { displayName: name, photoURL });
      Swal.fire("Success!", "Profile updated successfully!", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-xl border border-gray-700 backdrop-blur-sm">
  <h2 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
    My Profile
  </h2>

  <img
    src={photoURL}
    alt="Profile"
    className="w-24 h-24 rounded-full mb-4 mx-auto border-4 border-amber-500"
  />

  <p className="text-center text-gray-300 mb-6">
    <strong className="text-white">Email:</strong> {currentUser.email}
  </p>

  <div>
    <label className="block text-sm font-medium text-gray-300">Name</label>
    <input
      type="text"
      className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <label className="block text-sm font-medium mt-4 text-gray-300">Photo URL</label>
    <input
      type="text"
      className="input input-bordered w-full bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500"
      value={photoURL}
      onChange={(e) => setPhotoURL(e.target.value)}
    />

    <button
      onClick={handleUpdate}
      className="btn w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-medium"
    >
      Save Changes
    </button>
  </div>
</div>

  );
}
