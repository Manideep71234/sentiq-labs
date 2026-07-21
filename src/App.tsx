import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignatureLoader from './components/SignatureLoader';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import AIVoiceAgents from './pages/AIVoiceAgents';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <SignatureLoader />
      <CanvasBackground />
      <Navbar />
      
      <main style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-voice" element={<AIVoiceAgents />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
