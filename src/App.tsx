import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./toast";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Creators from "./pages/Creators";
import Creator from "./pages/Creator";
import HowItWorks from "./pages/HowItWorks";
import PostRequest from "./pages/PostRequest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Service />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/post-request" element={<PostRequest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Fallback to home for any unknown path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
