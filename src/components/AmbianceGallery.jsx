import React, { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    title: "Cozy Cafe Vibe",
    desc: "Perfect ambiance for friends and family"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    title: "Paneer Tikka Pizza",
    desc: "Fresh handmade base baked to perfection"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    title: "Classic Burgers",
    desc: "In-house prepared buns and juicy patties"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    title: "Chocolate Brownie",
    desc: "Warm chocolate goodness to satisfy your sweet tooth"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    title: "Cool Mocktails",
    desc: "Refreshing drinks to beat the heat"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    title: "Sizzling Chinese",
    desc: "Aromatic, delicious wok-tossed noodles"
  }
];

const AmbianceGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="gallery-section glass-card">
      <h3 className="section-title">
        <i className="fa-solid fa-images" style={{ color: 'var(--primary)' }}></i> Ambiance & Dishes
      </h3>
      
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div 
            key={img.id} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={img.url} alt={img.title} className="gallery-img" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-img-title">{img.title}</span>
              <span className="gallery-img-desc">{img.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[lightboxIndex].url} 
              alt={galleryImages[lightboxIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              <h4>{galleryImages[lightboxIndex].title}</h4>
              <p>{galleryImages[lightboxIndex].desc}</p>
            </div>
          </div>
          
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default AmbianceGallery;
