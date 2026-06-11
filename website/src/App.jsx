import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import PersonasSection from './components/sections/PersonasSection';
import CTASection from './components/sections/CTASection';
import ConsultingSection from './components/sections/ConsultingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
