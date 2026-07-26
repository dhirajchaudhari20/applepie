import React, { useState, useMemo } from 'react';
import { menuCategories, menuData } from '../data/menuData';

const OnlineOrderModal = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'veg', 'nonveg'
  const [cart, setCart] = useState({}); // { itemId: quantity }

  const handleQuantityChange = (itemId, change) => {
    setCart((prevCart) => {
      const currentQty = prevCart[itemId] || 0;
      const newQty = Math.max(0, currentQty + change);
      const newCart = { ...prevCart };
      if (newQty === 0) {
        delete newCart[itemId];
      } else {
        newCart[itemId] = newQty;
      }
      return newCart;
    });
  };

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = filterType === 'all' || item.type === filterType;
      return matchesCategory && matchesSearch && matchesType;
    });
  }, [activeCategory, searchQuery, filterType]);

  const cartTotal = useMemo(() => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuData.find((i) => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  }, [cart]);

  const totalItemsCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  const handleWhatsAppCheckout = () => {
    if (totalItemsCount === 0) return;

    let message = `Hi Apple Pie Restaurant, I would like to place an order:\n\n`;
    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = menuData.find((i) => i.id === itemId);
      if (item) {
        message += `*${quantity}x* ${item.name} (₹${item.price}) - ₹${item.price * quantity}\n`;
      }
    });
    message += `\n*Total: ₹${cartTotal}*\n`;
    message += `\nType: Takeaway / Delivery\nName: \nAddress (if delivery): `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919028084442?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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
        maxWidth: '800px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '1.5rem',
        borderRadius: '16px',
        border: '1px solid var(--glass-border)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>
            <i className="fa-solid fa-cart-shopping"></i> Order Online
          </h2>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexDirection: window.innerWidth < 600 ? 'column' : 'row' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 2.5rem 0.6rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                outline: 'none'
              }}
            />
            <i className="fa-solid fa-magnifying-glass" style={{
              position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)'
            }}></i>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setFilterType('all')} 
              style={{
                padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
                background: filterType === 'all' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: '#fff', cursor: 'pointer'
              }}
            >
              All
            </button>
            <button 
              onClick={() => setFilterType('veg')} 
              style={{
                padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
                background: filterType === 'veg' ? '#2e7d32' : 'rgba(255,255,255,0.05)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem'
              }}
            >
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#4caf50' }}></span> Veg
            </button>
            <button 
              onClick={() => setFilterType('nonveg')} 
              style={{
                padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
                background: filterType === 'nonveg' ? '#c62828' : 'rgba(255,255,255,0.05)',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem'
              }}
            >
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#ef5350' }}></span> Non-Veg
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          overflowX: 'auto', 
          paddingBottom: '0.5rem', 
          marginBottom: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <button 
            onClick={() => setActiveCategory('All')}
            style={{
              padding: '0.4rem 0.8rem', borderRadius: '20px', border: 'none',
              background: activeCategory === 'All' ? '#fff' : 'rgba(255,255,255,0.1)',
              color: activeCategory === 'All' ? '#000' : '#fff', cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            All Categories
          </button>
          {menuCategories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.4rem 0.8rem', borderRadius: '20px', border: 'none',
                background: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.1)',
                color: activeCategory === cat ? '#000' : '#fff', cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1rem' }}>
          {filteredItems.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '2rem' }}>No items found.</p>
          ) : (
            filteredItems.map(item => {
              const qty = cart[item.id] || 0;
              return (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div style={{ flex: 1, paddingRight: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ 
                        border: `1px solid ${item.type === 'veg' ? '#4caf50' : '#ef5350'}`,
                        padding: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '3px',
                        width: '12px',
                        height: '12px'
                      }}>
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: item.type === 'veg' ? '#4caf50' : '#ef5350' 
                        }}></span>
                      </span>
                      <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>{item.name}</h4>
                    </div>
                    {item.description && (
                      <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {item.description}
                      </p>
                    )}
                    <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '0.9rem', display: 'inline-block', marginTop: '0.25rem' }}>
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div>
                    {qty === 0 ? (
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="btn primary-btn"
                        style={{ 
                          padding: '0.4rem 1.2rem', 
                          fontSize: '0.85rem', 
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid var(--glass-border)',
                          minWidth: '70px'
                        }}
                      >
                        ADD
                      </button>
                    ) : (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        background: 'var(--primary)', 
                        borderRadius: '6px',
                        overflow: 'hidden'
                      }}>
                        <button 
                          onClick={() => handleQuantityChange(item.id, -1)}
                          style={{
                            border: 'none', background: 'transparent', color: '#fff', 
                            padding: '0.4rem 0.8rem', cursor: 'pointer', fontWeight: 'bold'
                          }}
                        >
                          -
                        </button>
                        <span style={{ color: '#fff', padding: '0 0.5rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                          {qty}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, 1)}
                          style={{
                            border: 'none', background: 'transparent', color: '#fff', 
                            padding: '0.4rem 0.8rem', cursor: 'pointer', fontWeight: 'bold'
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer/Cart Summary */}
        {totalItemsCount > 0 && (
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--glass-border)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto'
          }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} added</div>
              <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>Total: ₹{cartTotal}</div>
            </div>
            <button 
              onClick={handleWhatsAppCheckout}
              className="btn primary-btn"
              style={{ background: '#25D366', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> Send Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineOrderModal;
