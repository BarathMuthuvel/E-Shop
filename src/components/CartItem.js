import React from "react";
import { useDispatch } from "react-redux";
import { updateCartItem, removeFromCart } from "../redux/cartSlice";
import priceList from '../utils/helpers';

const CartItem = ({ item, details }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateCartItem({ id: item.id, quantity: newQuantity }));
    }
  };

  const priceIndex = parseInt(item.id, 10) % priceList.length;
  const price = priceList[priceIndex];

  return (
    <div className="flex items-center py-4 border-2 rounded-lg p-4">
      <img
        src={details ? details.strMealThumb : ''}
        alt={details ? details.strMeal : ''}
        className="w-16 h-16 object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{details ? details.strMeal : 'Meal Name'}</h3>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">
            $ {price.toFixed(2)}
          </span>
          <div className="ml-auto flex items-center">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
            >
              -
            </button>
            <span className="text-lg mx-2 border px-8 py-2 rounded-lg">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;