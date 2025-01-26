import Footer from "./components/Footer";
import Home from "./components/Home";
import ModalReport from "./components/ModalReport";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import About from "./components/About";

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualise" element={<Result />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ModalReport />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
