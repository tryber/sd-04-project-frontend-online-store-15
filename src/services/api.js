export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};

export const getProductsFromCategoryAndQuery = async (categoryId, query) => fetch(
  `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
).then((response) => response.json());

export const getDetails = (id) => fetch(`https://api.mercadolibre.com/items/${id}`)
  .then((response) => response.json());
