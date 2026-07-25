import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import FlipbookModal from './FlipbookModal';

const firebaseConfig = {
    apiKey: "AIzaSyCohKlqNu0I1sXcLW4D_fv-OEw9x0S50q8",
    authDomain: "dc-infotechpvt-1-d1a4b.firebaseapp.com",
    databaseURL: "https://dc-infotechpvt-1-d1a4b-default-rtdb.firebaseio.com",
    projectId: "dc-infotechpvt-1-d1a4b",
    storageBucket: "dc-infotechpvt-1-d1a4b.firebasestorage.app",
    messagingSenderId: "330752838328",
    appId: "1:330752838328:web:1fe0ca04953934d4638703"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const HeroInfo = () => {
  const [menuUrl, setMenuUrl] = useState("/assets/menu.pdf");
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  useEffect(() => {
    const menuUrlRef = ref(db, 'settings/menuUrl');
    const unsubscribe = onValue(menuUrlRef, (snapshot) => {
      const url = snapshot.val();
      if (url) {
        setMenuUrl(url);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <section className="card glass-card fade-in delay-1">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setIsFlipbookOpen(true)}
            className="btn primary-btn"
            style={{ background: '#E23744' }}
          >
            <i className="fa-solid fa-file-pdf"></i> View Full Menu
          </button>
        </div>

        <div className="rating-bar">
          <div className="rating-item">
            <div className="score">
              3.6 <i className="fa-solid fa-star"></i>
            </div>
            <div className="rating-label">Dining Ratings (7)</div>
          </div>
          <div className="rating-divider"></div>
          <div className="rating-item">
            <div className="score delivery-score">
              4.0 <i className="fa-solid fa-star"></i>
            </div>
            <div className="rating-label">Delivery Ratings (1,686)</div>
          </div>
        </div>

        <div className="quick-info">
          <div className="info-row">
            <i className="fa-solid fa-utensils info-icon"></i>
            <p className="cuisines">North Indian, Fast Food, Chinese, Pizza, Burger, Thai, Biryani, Momos</p>
          </div>
          <div className="info-row">
            <i className="fa-solid fa-location-dot info-icon"></i>
            <p>
              <a href="https://www.google.com/maps/place/apple+pie+saphale/data=!4m2!3m1!1s0x3be707a7ea702c47:0x27f641a6bfe0845d?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noreferrer" className="text-link">
                3267/6, Mangesh Sadan, Saphale, Mumbai
              </a>
            </p>
          </div>
          <div className="info-row">
            <i className="fa-solid fa-phone info-icon"></i>
            <p>
              <a href="tel:+919028084442" className="text-link">+91 9028084442</a>
            </p>
          </div>
        </div>

        <div className="hero-image-box mt-4" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
          <img
            src="https://b.zmtcdn.com/data/pictures/2/21705142/eaef45acd875db09e8263c4035f9554e.jpeg?output-format=webp"
            alt="Apple Pie"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </section>

      <FlipbookModal 
        isOpen={isFlipbookOpen} 
        onClose={() => setIsFlipbookOpen(false)} 
        pdfUrl={menuUrl} 
      />
    </>
  );
};

export default HeroInfo;
