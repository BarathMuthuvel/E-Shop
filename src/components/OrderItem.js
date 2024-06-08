import React from "react";
import priceList from '../utils/helpers';

const OrderItem = ({ order }) => {
  
  const totalPrice = order.items.reduce((total, item) => {
    const priceIndex = parseInt(item.id, 10) % priceList.length;
    const price = priceList[priceIndex];
    return total + item.quantity * price;
  }, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Order ID : #{order.id}</h1>
        <p className="text-lg font-semibold">Total Price : ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="bg-slate-100 p-4 rounded-md border-b">
        {order.items.map((item, index) => {
          const priceIndex = parseInt(item.id, 10) % priceList.length;
          const price = priceList[priceIndex];
          
          return (
            <div key={index} className="flex items-center justify-between border-b-2 py-4">
              <div className="flex items-center">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-16 h-16 object-cover mr-4 rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.strMeal}</h2>
                  <p className="text-gray-600">${price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center font-semibold">
                <p>
                  {item.quantity} x {price.toFixed(2)}
                </p>
                <span className="mx-1">=</span>
                <p>${(item.quantity * price).toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderItem;