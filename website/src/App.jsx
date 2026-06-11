import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import PersonasSection from './components/sections/PersonasSection';
import CTASection from './components/sections/CTASection';

export const ThemeContext = createContext({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('prodev-theme');
    return saved ? saved === 'dark' : true; // default: dark
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('prodev-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className="min-h-screen antialiased" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <Navbar />
        <main>
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
    </ThemeContext.Provider>
  );
}
