import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Home sections
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import PersonasSection from './components/sections/PersonasSection';
import CTASection from './components/sections/CTASection';
import ConsultingSection from './components/sections/ConsultingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';

// Pages
import ProductsPage from './pages/ProductsPage';
import EvinraPage from './pages/EvinraPage';
import TravelorHubPage from './pages/TravelorHubPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyKingBoatworks from './pages/CaseStudyKingBoatworks';
import CaseStudyHQT from './pages/CaseStudyHQT';
import CaseStudyEvinra from './pages/CaseStudyEvinra';
import ConsultingPage from './pages/ConsultingPage';
import CustomSolutionsPage from './pages/CustomSolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <ServicesSection />
      <ConsultingSection />
      <HowItWorksSection />
      <PersonasSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen antialiased" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/evinra" element={<EvinraPage />} />
          <Route path="/products/travelorhub" element={<TravelorHubPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/king-boatworks" element={<CaseStudyKingBoatworks />} />
          <Route path="/case-studies/hqt-punta-cana" element={<CaseStudyHQT />} />
          <Route path="/case-studies/evinra" element={<CaseStudyEvinra />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/custom-solutions" element={<CustomSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
