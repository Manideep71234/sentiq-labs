
import { Routes, Route } from 'react-router-dom';
import CanvasBackground from './components/CanvasBackground';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Home = () => (
  <>
    <HeroSection />
    <SolutionsSection />
    <ProcessSection />
    <TestimonialsSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <>
      <CanvasBackground />
      <Ticker />
      <Navbar />
      
      <main style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsSection />} />
          <Route path="/process" element={<ProcessSection />} />
          <Route path="/about" element={
            <>
              <AboutSection />
              <TestimonialsSection />
            </>
          } />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
