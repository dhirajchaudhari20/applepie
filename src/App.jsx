import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import FlipbookModal from './components/FlipbookModal';
import OnlineOrderModal from './components/OnlineOrderModal';

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

const reviews = [
  { name: "Tejal Mhatre", rating: 5, date: "Apr 08, 2025", text: '"Food is very delicious with reasonable prices. Love it for that. 😊👍"', avatar: "TM" },
  { name: "Dhiraj Chaudhari", rating: 5, date: "Jun 15, 2025", text: '"The best restaurant in Saphale! The Paneer Tikka Pizza and Mocktails are absolutely amazing. Highly recommended! 🍕🔥"', avatar: "DC" },
  { name: "Prashant Manjrekar", rating: 5, date: "Mar 26, 2025", text: '"best quality"', avatar: "PM" },
  { name: "Hiren Chaudhari", rating: 5, date: "May 22, 2025", text: '"Awesome taste, clean hygiene, and fast service. The burgers here are handmade and taste out of this world! 🍔💯"', avatar: "HC" },
  { name: "Pruthvi", rating: 5, date: "Feb 21, 2025", text: '"food is delicious and tasty speciality in pizza and burger hand made pizza base and burger bun and specially chocolate brownies is awesome 😋😋😋😋😋 must visit to the restaurant"', avatar: "P" },
  { name: "Rohan Patil", rating: 5, date: "Jan 12, 2025", text: '"Excellent experience! Love the ambiance and the service. The Chinese items and Dum Biryani are top-notch! 🍛✨"', avatar: "RP" }
];

function App() {
  const [menuUrl, setMenuUrl] = useState("/assets/menu.pdf");
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    // Fetch menuUrl from Firebase
    const menuUrlRef = ref(db, 'settings/menuUrl');
    const unsubscribe = onValue(menuUrlRef, (snapshot) => {
      const url = snapshot.val();
      if (url) {
        setMenuUrl(url);
      }
    });

    // Check Open/Closed Status (8 AM to 11 PM IST)
    const checkStatus = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false };
      const currentHourIST = parseInt(new Intl.DateTimeFormat('en-US', options).format(now));
      setIsOpen(currentHourIST >= 8 && currentHourIST < 23);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  // Pre-fetch PDF menu to browser cache
  useEffect(() => {
    if (menuUrl) {
      fetch(menuUrl).catch((err) => console.log("Pre-fetching PDF failed:", err));
    }
  }, [menuUrl]);

  // Review Slider Autoplay
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <>
      {/* Dynamic Background */}
      <div className="bg-wrapper">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>
      </div>

      <main className="linktree-container">
        {/* Profile Card */}
        <div className="profile-header">
          <div className="profile-logo-box">
            <img
              src="https://scontent.cdninstagram.com/v/t51.2885-19/157122211_137066524974721_2302377478699360651_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=qOxRHYMpdScQ7kNvwHsx3EO&_nc_oc=AdprIjma9ncfTbNgHEPreO49HYrr0ikMmNvmt9eRzms4OJbMZIICXABncfpJ00YF9u8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b689&oh=00_AQB4LYfTl8OvLfzH422evgAEGyb9hM4cNlPb-K1vYJRAfQ&oe=6A69409A"
              alt="Apple Pie Logo"
              className="profile-logo"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
            />
          </div>
          <h1 className="profile-title">Apple Pie Restaurant</h1>
          <p className="profile-bio">Multicuisine Restaurant & Cafe | Saphale, Mumbai</p>

          <span className={`status-badge ${isOpen ? 'open' : 'closed'}`} style={{ marginTop: '0.5rem' }}>
            <i className={`fa-solid ${isOpen ? 'fa-clock' : 'fa-door-closed'}`}></i> 
            {isOpen ? 'Open Now' : 'Closed'}
          </span>
        </div>

        {/* Link Buttons */}
        <div className="linktree-buttons">
          <button onClick={() => setIsFlipbookOpen(true)} className="link-btn menu-btn">
            <i className="fa-solid fa-file-pdf icon"></i>
            <span>View Full Menu</span>
          </button>

          <button onClick={() => setIsOrderOpen(true)} className="link-btn order-btn">
            <i className="fa-brands fa-whatsapp icon"></i>
            <span>Order on WhatsApp</span>
          </button>

          <a href="https://www.google.com/maps/place/apple+pie+saphale/data=!4m2!3m1!1s0x3be707a7ea702c47:0x27f641a6bfe0845d?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noreferrer" className="link-btn maps-btn">
            <i className="fa-solid fa-location-dot icon"></i>
            <span>Find Us on Google Maps</span>
          </a>

          <a href="tel:+919028084442" className="link-btn call-btn">
            <i className="fa-solid fa-phone icon"></i>
            <span>Call Us: +91 9028084442</span>
          </a>

          <a href="https://www.instagram.com/applepie_cafe/" target="_blank" rel="noreferrer" className="link-btn instagram-btn">
            <i className="fa-brands fa-instagram icon"></i>
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Restore Hero Image */}
        <div className="hero-image-box mt-4" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
          <img
            src="https://b.zmtcdn.com/data/pictures/2/21705142/eaef45acd875db09e8263c4035f9554e.jpeg?output-format=webp"
            alt="Apple Pie Restaurant"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Reviews Slider */}
        <div className="reviews-slider-box mt-4">
          <h3 className="slider-title"><i className="fa-solid fa-star" style={{ color: 'var(--star-color)' }}></i> Guest Reviews</h3>
          <div className="slider-container">
            {reviews.map((review, idx) => (
              <div 
                key={review.name} 
                className={`slider-slide ${idx === reviewIndex ? 'active' : ''}`}
              >
                <div className="review-header" style={{ marginBottom: '0.5rem' }}>
                  <div className="reviewer-avatar">{review.avatar}</div>
                  <div className="reviewer-info">
                    <h4 className="reviewer-name" style={{ margin: 0, fontSize: '0.95rem' }}>{review.name}</h4>
                    <span className="review-date" style={{ fontSize: '0.75rem' }}>{review.date}</span>
                  </div>
                  <div className="review-rating" style={{ fontSize: '0.8rem', padding: '0.2rem 0.4rem' }}>
                    {review.rating} <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <p className="review-text" style={{ fontSize: '0.9rem', margin: 0 }}>{review.text}</p>
              </div>
            ))}
          </div>
          {/* Dot Indicators */}
          <div className="slider-dots">
            {reviews.map((_, idx) => (
              <span 
                key={idx} 
                className={`slider-dot ${idx === reviewIndex ? 'active' : ''}`}
                onClick={() => setReviewIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Social Icons Footer */}
        <div className="social-footer">
          <a href="https://www.instagram.com/applepie_cafe/" target="_blank" rel="noreferrer" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="tel:+919028084442" title="Call Us">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="https://wa.me/919028084442" target="_blank" rel="noreferrer" title="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Apple Pie Restaurant & Cafe</p>
        </footer>
      </main>

      {/* Modals */}
      <FlipbookModal 
        isOpen={isFlipbookOpen} 
        onClose={() => setIsFlipbookOpen(false)} 
        pdfUrl={menuUrl} 
      />
      <OnlineOrderModal 
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
      />
    </>
  );
}

export default App;
