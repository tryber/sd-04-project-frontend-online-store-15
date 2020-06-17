export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};

export const getProductsFromCategoryAndQuery = (categoryId, query) => {
  if (categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`)
      .then((response) => response.json());
  }
  if (query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${query}`)
      .then((response) => response.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
};