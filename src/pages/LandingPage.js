import React from 'react';
import './../css/landingpage.css'; 

const LandingPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$50.00',
      description: 'High-quality wireless headphones with noise-canceling feature.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: '$699.00',
      description: 'Latest model smartphone with high-resolution camera and fast processor.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Laptop',
      price: '$999.00',
      description: 'Powerful laptop with long battery life and sleek design.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: '$199.00',
      description: 'Wearable smartwatch with health monitoring features.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Gaming Console',
      price: '$499.00',
      description: 'Next-gen gaming console with ultra-high-definition graphics.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to Our Online Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="product-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
