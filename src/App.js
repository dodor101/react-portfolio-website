import Portfolio from './components/pages/Portfolio';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
