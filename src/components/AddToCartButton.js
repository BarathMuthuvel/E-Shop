import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem } from '../redux/cartSlice';

const AddToCartButton = ({ itemId, initialQuantity = 0, buttonStyle = {}}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((cartItem) => cartItem.id === itemId);
  const [quantity, setQuantity] = useState(cartItem?.quantity || initialQuantity);

  useEffect(() => {
    setQuantity(cartItem?.quantity || initialQuantity);
  }, [cartItem, initialQuantity]);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: itemId, quantity: 1 }));
    setQuantity(1);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateCartItem({ id: itemId, quantity: newQuantity }));
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    dispatch(updateCartItem({ id: itemId, quantity: newQuantity }));
  };

  return (
    <div>
      {quantity === 0 ? (
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full"
          style={buttonStyle}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center">
          <button
            onClick={handleDecrease}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200"
          >
            −
          </button>
          <span className="text-lg mx-4 border px-14  py-2 rounded-lg">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
