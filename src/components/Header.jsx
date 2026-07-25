import React from 'react';

const Header = () => {
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
        <span className="status-badge open">
          <i className="fa-solid fa-clock"></i> Open until 11 PM
        </span>
      </div>
    </header>
  );
};

export default Header;
