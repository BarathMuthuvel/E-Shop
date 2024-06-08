// src/pages/ItemList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemsByCategoryAsync } from '../redux/itemSlice';
import ItemCard from '../components/ItemCard';
import Breadcrumb from '../components/Breadcrum';

const ItemList = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { data: items, status } = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItemsByCategoryAsync(category));
  }, [dispatch, category]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading items.</div>;

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: category, path: null }
  ];

  return (
    <div className="container mx-auto py-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <ItemCard key={item.idMeal} item={item} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;