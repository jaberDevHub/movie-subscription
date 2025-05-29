
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound/NotFound";
import Profile from "../components/Profile/Profile";
import ForgotPassword from "../components/ForgetPassword";
import Movies from "../components/Movies/Movies";
import SubscriptionDetail from "../components/Subscription/SubscriptionDetails";
import ProtectedRoute from "../pages/ProtectedRoute";

export default function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<ProtectedRoute user={user}></ProtectedRoute>} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="movies" element={<Movies />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/subscriptions/:id"
        element={
          <ProtectedRoute user={user}>
            <SubscriptionDetail />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
