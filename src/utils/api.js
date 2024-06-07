const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
};

export const fetchItemsByCategory = async (category) => {
  const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
};

export const fetchItemDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};