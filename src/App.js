import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Bikes from "./pages/Bikes/Bikes";
import PrivateDriver from "./pages/PrivateDriver/PrivateDriver";
import Login from "./pages/Login/Login";
import YourReservations from "./pages/YourReservations/YourReservations";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Nav from "./components/Nav/Nav";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const App = () => {

  return (
      <AuthProvider>
        <Router>
          <div>
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bikes" element={<Bikes />} />
              <Route path="/private-driver" element={<PrivateDriver />} />
              <Route path="/login" element={<Login />} />
              <Route path="/your-reservations" element={<YourReservations />} />
              <Route path="/reservationPage" element={<ReservationPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
  );
};

export default App;
