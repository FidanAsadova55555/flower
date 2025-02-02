import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Added Navigate
import Home from "./pages/home/home";
import Layout from "./layout/layout";
import "remixicon/fonts/remixicon.css";
import AdminLogin from "./components/login/login";
import RegisterPage from "./components/register";

const App = () => {
  return (
    <div className="font-poppins">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
