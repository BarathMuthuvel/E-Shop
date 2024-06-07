import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none">
              <path d="M20 17.5C20 19.9853 18.9853 21 16.5 21H7.5C5.01472 21 4 19.9853 4 17.5V6.5C4 4.01472 5.01472 3 7.5 3H16.5C18.9853 3 20 4.01472 20 6.5V17.5Z" className="stroke-white" strokeWidth="1.5" />
              <path d="M9 8L9 7" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8L12 7" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 8L15 7" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 12L9 11" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 12L12 11" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 12L15 11" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 16L9 15" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 16L12 15" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 16L15 15" className="stroke-white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="19" r="1" fill="#10B981" className="animate-ping absolute" />
            </svg>
          </div>
          <span className="text-2xl font-bold font-mono tracking-tight">byte.eat()</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">{cartQuantity}</span>
            )}
          </Link>
          <Link to="/settings" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;