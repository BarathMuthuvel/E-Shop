import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ItemDetails from './pages/ItemDetails';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className='mx-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;