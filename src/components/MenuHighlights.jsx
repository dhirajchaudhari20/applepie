import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCohKlqNu0I1sXcLW4D_fv-OEw9x0S50q8",
    authDomain: "dc-infotechpvt-1-d1a4b.firebaseapp.com",
    databaseURL: "https://dc-infotechpvt-1-d1a4b-default-rtdb.firebaseio.com",
    projectId: "dc-infotechpvt-1-d1a4b",
    storageBucket: "dc-infotechpvt-1-d1a4b.firebasestorage.app",
    messagingSenderId: "330752838328",
    appId: "1:330752838328:web:1fe0ca04953934d4638703"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const MenuHighlights = () => {
  const [menuUrl, setMenuUrl] = useState("/assets/menu.pdf");

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
    <section className="card glass-card fade-in delay-2">
      <h2 className="section-title">Our Menu Highlights</h2>
      <a
        href={menuUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn primary-btn"
        style={{ background: '#E23744', marginTop: '0.5rem' }}
      >
        <i className="fa-solid fa-file-pdf"></i> View Full Menu
      </a>
      <div
        className="menu-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
          marginTop: '1.5rem',
        }}
      >
        <div className="menu-item" style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Paneer Tikka Pizza</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Handmade base loaded with cheese and paneer.</p>
        </div>
        <div className="menu-item" style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Classic Chicken Burger</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Juicy patty in our special freshly baked buns.</p>
        </div>
        <div className="menu-item" style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Veg Hakka Noodles</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Stir-fried noodles with crisp veggies & sauces.</p>
        </div>
        <div className="menu-item" style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Chicken Dum Biryani</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Aromatic basmati rice cooked with tender chicken.</p>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
