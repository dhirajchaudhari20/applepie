import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

const FeedbackForm = ({ db }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState('Food');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Food', 'Service', 'Ambiance', 'Delivery'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to Firebase RTDB
      const feedbacksRef = ref(db, 'feedbacks');
      await push(feedbacksRef, {
        name,
        rating,
        category,
        comment,
        timestamp: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });

      setSubmitted(true);
      
      // Auto reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setComment('');
        setRating(5);
        setCategory('Food');
      }, 5000);
    } catch (err) {
      console.error("Error submitting feedback to Firebase:", err);
      alert("Could not submit feedback to database, but you can still send it via WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!name.trim() || !comment.trim()) {
      alert("Please fill out your Name and Comment first.");
      return;
    }
    
    const stars = '⭐'.repeat(rating);
    const text = `*New Feedback from Website!*\n\n*Name:* ${name}\n*Rating:* ${stars} (${rating}/5)\n*Category:* ${category}\n*Comments:* ${comment}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919028084442?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="feedback-section glass-card">
      <h3 className="section-title">
        <i className="fa-solid fa-pen-to-square" style={{ color: 'var(--primary)' }}></i> Share Your Feedback
      </h3>

      {submitted ? (
        <div className="feedback-success-state">
          <i className="fa-solid fa-circle-check success-icon"></i>
          <h4>Thank you for your feedback!</h4>
          <p>Your review helps us serve you better. We've recorded your comments in our system.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="feedback-name">Your Name</label>
            <input
              type="text"
              id="feedback-name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label>Select Rating</label>
              <div className="star-rating-selector">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`star-btn ${star <= rating ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group flex-1">
              <label htmlFor="feedback-category">Category</label>
              <select
                id="feedback-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="feedback-comment">Comments / Suggestions</label>
            <textarea
              id="feedback-comment"
              rows="3"
              placeholder="Tell us what you liked or what we can improve..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="feedback-actions">
            <button 
              type="submit" 
              className="feedback-btn submit-db-btn"
              disabled={isSubmitting}
            >
              <i className="fa-solid fa-paper-plane"></i> {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>

            <button 
              type="button" 
              onClick={handleWhatsAppSubmit}
              className="feedback-btn whatsapp-submit-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Share on WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
