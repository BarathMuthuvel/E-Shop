import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../redux/categorySlice';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const dispatch = useDispatch();
  const { data: categories, status } = useSelector(state => state.categories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategoriesAsync());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading categories.</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;