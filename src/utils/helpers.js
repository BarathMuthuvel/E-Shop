export const generateRandomPrice = (min = 5.99, max = 19.99) => {
    const price = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(price);
  };