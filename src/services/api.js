export async function getCategories() {
  const apiML = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await apiML.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiML = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await apiML.json();
  return data;
}

export async function getProductById(item) {
  const apiID = await fetch(`https://api.mercadolibre.com/items/${item}`);
  const data = await apiID.json();
  return data;
}
