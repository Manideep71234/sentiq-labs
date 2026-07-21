
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
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
