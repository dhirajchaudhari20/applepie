import React from 'react';

const MoreInfo = () => {
  return (
    <section className="card glass-card fade-in delay-3">
      <h2 className="section-title">More Info</h2>
      <div className="features-grid">
        <div className="feature-tag"><i className="fa-solid fa-check"></i> Indoor seating</div>
        <div className="feature-tag"><i className="fa-solid fa-check"></i> Vegetarian friendly</div>
        <div className="feature-tag"><i className="fa-solid fa-check"></i> Home delivery</div>
        <div className="feature-tag"><i className="fa-solid fa-check"></i> Lunch</div>
        <div className="feature-tag"><i className="fa-solid fa-check"></i> Dinner</div>
      </div>
      
      <div className="action-buttons mt-4">
        <a href="https://www.instagram.com/applepie_cafe/" target="_blank" rel="noreferrer" className="btn primary-btn instagram-btn">
          <i className="fa-brands fa-instagram"></i> Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default MoreInfo;
