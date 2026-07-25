import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Ensure the pdf worker is loaded correctly for Vite
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageComponent = React.forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div className="page" ref={ref} style={{ backgroundColor: '#fff', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
      <Page 
        pageNumber={pageNumber} 
        width={width}
        renderTextLayer={false} 
        renderAnnotationLayer={false} 
      />
    </div>
  );
});

const FlipbookModal = ({ isOpen, onClose, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Calculate book dimensions based on screen size
  const bookWidth = windowWidth > 800 ? 400 : windowWidth - 40;
  const bookHeight = bookWidth * 1.414; // A4 aspect ratio approximation

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: isOpen ? 9999 : -1,
      visibility: isOpen ? 'visible' : 'hidden',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'opacity 0.3s ease, visibility 0.3s ease',
      padding: '20px'
    }}>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 10000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="flipbook-container" style={{ position: 'relative' }}>
        <p style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
          <i className="fa-solid fa-hand-pointer"></i> Swipe or drag corners to flip pages
        </p>
        
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p style={{ color: 'white' }}>Loading amazing food...</p>}
        >
          {numPages && (
            <HTMLFlipBook 
              width={bookWidth} 
              height={bookHeight}
              size="fixed"
              minWidth={300}
              maxWidth={600}
              minHeight={400}
              maxHeight={850}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="restaurant-menu-flipbook"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <PageComponent 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  width={bookWidth} 
                />
              ))}
            </HTMLFlipBook>
          )}
        </Document>
      </div>
    </div>
  );
};

export default FlipbookModal;
