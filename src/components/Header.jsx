import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false };
      const currentHourIST = parseInt(new Intl.DateTimeFormat('en-US', options).format(now));
      // Restaurant is open from 11 AM (11) to 11 PM (23)
      setIsOpen(currentHourIST >= 11 && currentHourIST < 23);
    };

    checkStatus(); // Initial check
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="glass-header slide-in-top">
      <div className="logo-box">
        <img
          src="https://scontent.cdninstagram.com/v/t51.2885-19/157122211_137066524974721_2302377478699360651_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=qOxRHYMpdScQ7kNvwHsx3EO&_nc_oc=AdprIjma9ncfTbNgHEPreO49HYrr0ikMmNvmt9eRzms4OJbMZIICXABncfpJ00YF9u8&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b689&oh=00_AQB4LYfTl8OvLfzH422evgAEGyb9hM4cNlPb-K1vYJRAfQ&oe=6A69409A"
          alt="Apple Pie Logo"
          className="brand-logo"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
        />
      </div>
      <div className="brand-text">
        <h1>Apple Pie Restaurant & Cafe</h1>
        <span className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
          <i className={`fa-solid ${isOpen ? 'fa-clock' : 'fa-door-closed'}`}></i> 
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      </div>
    </header>
  );
};

export default Header;
