import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ApplyNow from "./pages/ApplyNow";
import Trainees from "./pages/Trainees";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import Admin from "./pages/adminPages/Admin";
import AddFeature from "./components/adminComponents/AddFeatures";
import AddInternship from "./components/adminComponents/AddInternship";
import GetFeatures from "./pages/adminPages/GetFeatures";
import UpdateFeature from "./pages/adminPages/UpdateFeature";
import AddInternsh from "./pages/adminPages/AddInternsh";
import GetInternship from "./pages/adminPages/GetInternship";
import GetInterns from "./pages/adminPages/GetInterns";
const App = () => {
  const { authUser, checkAuth, isAdmin } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-internship" element={<ApplyNow />} />
          <Route path="/varify" element={<Trainees />} />
          <Route
            path="/signup"
            element={!authUser ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/logout"
            element={!authUser ? <Home /> : <Navigate to="/" />}
          />
          <Route path="/admin" element={!isAdmin ? <Home /> : <Admin />} />
          <Route path="/admin" element={<AddFeature />} />
          <Route
            path="/admin/add-Internship"
            element={!isAdmin ? <Home /> : <AddInternsh />}
          />
          <Route
            path="/admin/get-features"
            element={!isAdmin ? <Home /> : <GetFeatures />}
          />
          <Route
            path="/admin/get-internships"
            element={!isAdmin ? <Home /> : <GetInternship />}
          />
          <Route
            path="/admin/update-features"
            element={!isAdmin ? <Home /> : <UpdateFeature />}
          />
          <Route
            path="/admin/get-interns"
            element={!isAdmin ? <Home /> : <GetInterns />}
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
