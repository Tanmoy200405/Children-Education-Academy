import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NewsEvents from "./pages/NewsEvents";
import Alumni from "./pages/Alumni";
import ParentLogin from "./pages/ParentLogin";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SubPage from "./pages/SubPage";
import "./index.css";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<SubPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/:id" element={<SubPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/parent-login" element={<ParentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    <Footer />
    </Router>
  );
}

export default App;
