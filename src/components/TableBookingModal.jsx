import React, { useState } from 'react';

const TableBookingModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState(2);
  const [timeSlot, setTimeSlot] = useState('7:00 PM');
  const [specialRequest, setSpecialRequest] = useState('');

  const lunchSlots = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const dinnerSlots = ['7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'];

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleBookTable = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }

    let message = `Hi Apple Pie Restaurant, I would like to book a table:\n\n`;
    message += `*Name:* ${name}\n`;
    message += `*Date:* ${date}\n`;
    message += `*Time:* ${timeSlot}\n`;
    message += `*Guests:* ${guests} ${guests === '7+' ? 'or more' : ''}\n`;
    if (specialRequest.trim()) {
      message += `*Special Request:* ${specialRequest}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919028084442?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div className="card glass-card" style={{
        width: '100%',
        maxWidth: '550px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '1.5rem',
        borderRadius: '16px',
        border: '1px solid var(--glass-border)',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexShrink: 0 }}>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-calendar-days" style={{ color: 'var(--primary)' }}></i> Book a Table
          </h2>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <form onSubmit={handleBookTable} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Guest Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>Your Name *</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Date Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>Select Date</label>
            <input 
              type="date" 
              min={getTodayDateString()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Guests Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>Number of Guests</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[1, 2, 3, 4, 5, 6, '7+'].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setGuests(num)}
                  style={{
                    flex: 1,
                    minWidth: '50px',
                    padding: '0.5rem 0',
                    borderRadius: '8px',
                    border: '1px solid var(--glass-border)',
                    background: guests === num ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>Preferred Time Slot</label>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>Lunch Slots</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {lunchSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      style={{
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid var(--glass-border)',
                        background: timeSlot === slot ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                        color: '#fff',
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>Dinner Slots</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {dinnerSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      style={{
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid var(--glass-border)',
                        background: timeSlot === slot ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                        color: '#fff',
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Special Request */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>Special Requests (Optional)</label>
            <textarea 
              placeholder="e.g. Birthday celebration, window seat, food allergies..." 
              rows="2"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Action Button */}
          <button 
            type="submit" 
            className="btn primary-btn"
            style={{ marginTop: '0.5rem', width: '100%', background: '#25D366', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }}
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i> Confirm via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableBookingModal;
