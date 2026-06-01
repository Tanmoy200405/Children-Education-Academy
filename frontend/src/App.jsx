import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    <Footer />
    </Router>
  );
}

export default App;
