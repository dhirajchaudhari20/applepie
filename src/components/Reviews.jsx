import React from 'react';

const Reviews = () => {
  return (
    <section className="card glass-card fade-in delay-4">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="reviews-container">
        
        {/* Review 1 */}
        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">TM</div>
            <div className="reviewer-info">
              <h3 className="reviewer-name">Tejal Mhatre</h3>
              <span className="review-date">Apr 08, 2025</span>
            </div>
            <div className="review-rating">5 <i className="fa-solid fa-star"></i></div>
          </div>
          <p className="review-text">"Food is very delicious with reasonable prices. Love it for that. 😊👍"</p>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">PM</div>
            <div className="reviewer-info">
              <h3 className="reviewer-name">Prashant Manjrekar</h3>
              <span className="review-date">Mar 26, 2025</span>
            </div>
            <div className="review-rating">5 <i className="fa-solid fa-star"></i></div>
          </div>
          <p className="review-text">"best quality"</p>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-avatar">P</div>
            <div className="reviewer-info">
              <h3 className="reviewer-name">Pruthvi</h3>
              <span className="review-date">Feb 21, 2025</span>
            </div>
            <div className="review-rating">5 <i className="fa-solid fa-star"></i></div>
          </div>
          <p className="review-text">"food is delicious and tasty speciality in pizza and burger hand made pizza base and burger bun and specially chocolate brownies is awesome 😋😋😋😋😋 must visit to the restaurant"</p>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
