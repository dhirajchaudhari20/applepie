import React from 'react';

const MenuHighlights = () => {
  return (
    <section className="card glass-card fade-in delay-2">
      <h2 className="section-title">Our Menu Highlights</h2>
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
