import React from 'react';

const ItemCard = ({ item }) => {
  const {
    image,
    name,
    technicalName,
    description,
    skus,
    price,
  } = item;

  return (
    <div className = "itemcard" style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
    }}>
      {image && <img src={image} alt={name} style={{ width: '50%', height: '10rem', objectFit: 'cover', marginBottom: '1rem' }} />}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{name}</h2>
      <p style={{ color: '#4caf50', fontWeight: '600' }}>₹{price}</p>
      {technicalName && <p><strong>Technical Name:</strong> {technicalName}</p>}
      {description && <p><strong>Description:</strong> {description}</p>}
      {skus && <p><strong>Quantity:</strong> {skus}</p>}
    </div>
  );
};

export default ItemCard;
