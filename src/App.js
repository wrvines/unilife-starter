import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CityDetails from "./pages/CityDetails/CityDetails";
import HomePage from "./pages/HomePage/HomePage";
import SeeAllCities from "./pages/SeeAllCities/SeeAllCities";
import Social from "./components/Social/Social";
import HomeDetailPage from "./pages/HomeDetailPage/HomeDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allcities" element={<SeeAllCities />} />
        <Route path="/citydetails/:cityId" element={<CityDetails />} />
        <Route path="/homedetails/:homeId" element={<HomeDetailPage />} />
      </Routes>
      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
