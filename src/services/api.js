export async function getCategories() {
  const apiML = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await apiML.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiML = await fetch(`https://api.mercadolibre.com/sites/MLB/categories${categoryId}/${query}`);
  const data = await apiML.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
