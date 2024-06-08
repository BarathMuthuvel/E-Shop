import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useItems } from '../hooks/useItems';

const ItemPage = () => {
  const { itemId } = useParams();
  const { items } = useItems();
  const { addItemToCart } = useCart(); 

  const item = items.find((item) => item.idMeal === itemId);

  if (!item) {
    return <p>Item not found.</p>;
  }

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <div className="p-4">
      <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{item.strMeal}</h1>
      <button onClick={handleAddToCart} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ItemPage;
