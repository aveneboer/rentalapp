import React, { useContext } from 'react';
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
import AuthProvider, { AuthContext } from "./components/AuthProvider/AuthProvider";

const App = () => {
  const { isAuth } = useContext(AuthContext);

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
              {isAuth ? (
                  <Route path="/your-reservations" element={<YourReservations />} />
              ) : (
                  <Navigate to="/" />
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
