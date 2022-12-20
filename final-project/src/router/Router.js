import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroPage from "../pages/HeroPage";
import Dashboard from "../pages/Dashboard";
import ListJobVacancy from "../pages/ListJobVacancy";
import FormPage from "../pages/FormPage";
import ProfilePage from "../pages/ProfilePage";
import ChangePassword from "../pages/ChangePassword";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../pages/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/list-job-vacancy"
          element={<ListJobVacancy />}
        />
        <Route path="/dashboard/form" element={<FormPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/change-password" element={<ChangePassword />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
