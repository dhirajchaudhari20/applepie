import React, { useEffect } from 'react'
import Header from './components/Header'
import HeroInfo from './components/HeroInfo'
import MenuHighlights from './components/MenuHighlights'
import MoreInfo from './components/MoreInfo'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Micro-interactions and Entrance Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in-top').forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      document.querySelectorAll('.fade-in, .slide-in-top').forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Dynamic Background */}
      <div className="bg-wrapper">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>
      </div>

      <main className="app-container">
        <Header />
        <div className="content-grid">
          <HeroInfo />
          <MenuHighlights />
          <MoreInfo />
          <Reviews />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
