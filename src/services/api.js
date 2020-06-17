export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  return fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  ).then((response) => response.json());
};
