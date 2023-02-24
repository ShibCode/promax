import { Routes, Route } from "react-router-dom";

import Header from "./Layout//Header";
import Footer from "./Layout/Footer";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
