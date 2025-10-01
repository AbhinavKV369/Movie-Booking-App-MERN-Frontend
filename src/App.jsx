import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast"

import MoveToTop from "./components/MoveToTop";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBooking from "./pages/MyBooking";
import Favourites from "./pages/Favourites";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />

      {!isAdminRoute && <Navbar />}
      <MoveToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBooking />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
