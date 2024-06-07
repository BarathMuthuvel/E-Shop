import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.strCategory}`} className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{category.strCategory}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;