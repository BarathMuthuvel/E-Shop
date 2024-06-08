import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { createOrder } from "../redux/orderSlice";
import { clearCart } from "../redux/cartSlice";
import { fetchItemDetailsAsync } from "../redux/itemSlice";
import priceList from "../utils/helpers";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemDetails = useSelector((state) => state.items.details);

  React.useEffect(() => {
    cartItems.forEach((item) => {
      if (!itemDetails[item.id]) {
        dispatch(fetchItemDetailsAsync(item.id));
      }
    });
  }, [cartItems, itemDetails, dispatch]);

  const handlePlaceOrder = () => {
    const orderItems = cartItems.map((item) => {
      const details = itemDetails[item.id];
      return { ...item, ...details };
    });
    dispatch(createOrder(orderItems));
    dispatch(clearCart());
    navigate("/orders");
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce((total, item) => {
    const priceIndex = parseInt(item.id, 10) % priceList.length;
    const price = priceList[priceIndex];
    return total + item.quantity * price;
  }, 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-4 space-y-2">
            {cartItems.map((item) => {
              const details = itemDetails[item.id];
              if (!details) {
                return (
                  <div
                    key={item.id}
                    className="bg-gray-100 p-4 rounded-lg mb-4"
                  >
                    <p>Loading item details...</p>
                  </div>
                );
              }
              return <CartItem key={item.id} item={item} details={details} />;
            })}
          </div>
          <div className="md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <div className="flex justify-between mb-4 text-lg font-semibold">
              <span className="text-lg">Total Items:</span>
              <span className="text-lg">{totalQuantity}</span>
            </div>
            <div className="">
              {cartItems.map((item) => {
                const details = itemDetails[item.id];
                const priceIndex = parseInt(item.id, 10) % priceList.length;
                const price = priceList[priceIndex];
                if (!details) {
                  return (
                    <div
                      key={item.id}
                      className="bg-gray-100 p-4 rounded-lg mb-4"
                    >
                      <p>Loading item details...</p>
                    </div>
                  );
                }
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-100 rounded-lg mb-4"
                  >
                    <span>{details.strMeal}</span>
                    <div className="flex items-center">
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
            <div className="flex justify-between mb-4 font-semibold text-lg">
              <span className="text-lg">Total Price:</span>
              <span className="text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
