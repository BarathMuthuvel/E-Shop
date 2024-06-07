import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../components/OrderItem';

const Orders = () => {
  const orders = useSelector(state => state.orders.list);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div>
          {orders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;