import React from "react"; // Use single quotes here
import { Route, Routes } from "react-router-dom"; // Use single quotes here
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default AllRoutes;
