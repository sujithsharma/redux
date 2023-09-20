import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./welcomepage/WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/Dashboard/DashboardHome";
import DashboardProfile from "./components/Dashboard/DashboardProfile";
import DashboardSettings from "./components/Dashboard/DashboardSettings";
import PrivateRoute from "./ProtectedRouter/PrivateRoute";
import ProtectedLoginRoute from "./ProtectedRouter/ProtectedLoginRoute"; // Import the ProtectedLoginRoute component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<ProtectedLoginRoute element={Login} />}
        />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        <Route
          path="/signup"
          element={<ProtectedLoginRoute element={Signup} />}
        />
        <Route path="/" element={<ProtectedLoginRoute element={Navbar} />} />
      </Routes>
    </Router>
  );
};

export default App;
