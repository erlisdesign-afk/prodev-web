import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import PersonasSection from './components/sections/PersonasSection';
import CTASection from './components/sections/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white antialiased">
      <Navbar />
      <main>
        {/* CXL Clarity-First Architecture:
            Problem → Proof → Solution → Offer → Action */}
        <HeroSection />
        <ProblemSection />
        <ProductsSection />
        <ServicesSection />
        <HowItWorksSection />
        <PersonasSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
