import React from "react";
import { Link } from "react-router-dom";
import priceList from '../utils/helpers';
import AddToCartButton from "./AddToCartButton";

const ItemCard = ({ item }) => {
  if (!item) {
    return null; 
  }

  const priceIndex = parseInt(item.idMeal, 10) % priceList.length;
  const price = priceList[priceIndex];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/item/${item.idMeal}`}>
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.strMeal}</h2>
        <div className="text-lg font-bold text-green-600 my-2">$ {price.toFixed(2)}</div>
        <AddToCartButton itemId={item.idMeal} price={price} />
      </div>
    </div>
  );
};

export default ItemCard;