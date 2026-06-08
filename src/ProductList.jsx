import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();

  const plantsArray = [
    {
       category: "Air Purifying Plants",
       plants: [
           { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1c7e?auto=format&fit=crop&w=150&q=80", cost: "$15", description: "Produces oxygen at night." },
           { name: "Spider Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=150&q=80", cost: "$12", description: "Filters formaldehyde." }
       ]
    },
    {
       category: "Aromatic Fragrant Plants",
       plants: [
           { name: "Lavender", image: "https://images.unsplash.com/photo-1595841696677-6489ffa3f66f?auto=format&fit=crop&w=150&q=80", cost: "$20", description: "Calming scent." },
           { name: "Jasmine", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=150&q=80", cost: "$18", description: "Sweet fragrance." }
       ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    alert(`${plant.name} added to cart!`);
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <div className="plant-grid" style={{ display: 'flex', gap: '20px' }}>
            {category.plants.map((plant, plantIndex) => (
              <div className="plant-card" key={plantIndex} style={{ border: '1px solid #ccc', padding: '10px' }}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>{plant.description}</p>
                <p><strong>{plant.cost}</strong></p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
