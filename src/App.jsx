import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import PackagesPage from "./pages/PackagesPage";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import BookingHistory from "./components/BookingHistory";
import Footer from "./components/Footer";
import About from "./components/About";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/packages" element={<PackagesPage />} />

        <Route path="/booking" element={<BookingPage />} />

        <Route path="/history" element={<AdminDashboard />} />

        <Route path="/booking-history" element={<BookingHistory />} />

        <Route path="/about" element={<About/>}/>

        <Route path="/signin" element={<Signin/>}/>

      </Routes>

      <Footer />
      

    </BrowserRouter>
  );
}

export default App;