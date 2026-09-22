import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RequestAssistance from "./pages/RequestAssistance";
import NearbyMechanics from "./pages/NearbyMechanics";
import MechanicDetails from "./pages/MechanicDetails";
import RequestTracking from "./pages/RequestTracking";
import Review from "./pages/Review";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/request" element={<RequestAssistance />} />
      <Route path="/mechanics" element={<NearbyMechanics />} />
      <Route path="/mechanic/:id" element={<MechanicDetails />} />
      <Route path="/request/:id" element={<RequestTracking />} />
      <Route path="/review/:id" element={<Review />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;