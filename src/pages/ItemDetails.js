import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItemDetailsAsync } from '../redux/cartSlice';
import priceList from '../utils/helpers';
import AddToCartButton from '../components/AddToCartButton';
import Breadcrumb from '../components/Breadcrum';

const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const itemDetails = useSelector(state => state.cart.itemDetails[id]);

  const priceIndex = parseInt(id, 10) % priceList.length;
  const price = priceList[priceIndex];

  useEffect(() => {
    if (!itemDetails) {
      dispatch(fetchItemDetailsAsync(id));
    }
  }, [dispatch, id, itemDetails]);

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: itemDetails.strCategory, path: `/category/${itemDetails.strCategory}` },
    { label: itemDetails.strMeal, path: null }
  ];

  return (
    <div className="container mx-auto py-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={itemDetails.strMealThumb}
            alt={itemDetails.strMeal}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{itemDetails.strMeal}</h1>
          <p className="text-lg mb-4">{itemDetails.strInstructions}</p>
          <div className="text-lg font-bold text-green-600 my-2">$ {price.toFixed(2)}</div>
          <AddToCartButton itemId={id} price={price} initialQuantity={0} buttonStyle={{ width: '224px' }} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;