import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/user/Footer";
import MainPage from "../components/user/MainPage";
import Movie from "../components/user/Movie";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/elvis" element={<Movie />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
