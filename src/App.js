import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
      <AuthProvider>
        <Router>
          <div>
            <Nav isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bikes" element={<Bikes />} />
              <Route path="/private-driver" element={<PrivateDriver />} />
              <Route path="/login" element={<Login handleLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
              {!isAuthenticated ? (
                  <Route path="/your-reservations" element={<Navigate to="/login" replace={true} />} />
              ) : (
                  <Route path="/your-reservations" element={<YourReservations />} />
              )}
              <Route path="/reservationPage" element={<ReservationPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

          </div>
        </Router>
      </AuthProvider>
  );
};

export default App;
