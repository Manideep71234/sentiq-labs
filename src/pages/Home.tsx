import React from 'react';
import HeroSection from '../components/HeroSection';
import KeywordsTicker from '../components/KeywordsTicker';
import ProblemSection from '../components/ProblemSection';
import StatsBar from '../components/StatsBar';
import SolutionsSection from '../components/SolutionsSection';
import ProcessSection from '../components/ProcessSection';
import WhyUsSection from '../components/WhyUsSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <KeywordsTicker />
      <ProblemSection />
      <StatsBar />
      <SolutionsSection />
      <ProcessSection />
      <WhyUsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default Home;
