import React from 'react';

const HeroInfo = () => {
  return (
    <section className="card glass-card fade-in delay-1">
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
          <i className="fa-solid fa-wallet info-icon"></i>
          <p>₹500 for two people (approx.)</p>
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
  );
};

export default HeroInfo;
