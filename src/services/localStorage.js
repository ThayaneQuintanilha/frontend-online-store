const localStorageCreate = (products) => {
  if (!JSON.parse(localStorage.getItem('items'))) {
    localStorage.setItem('items', JSON.stringify([]));
  }

  const getLocalStorage = JSON.parse(localStorage.getItem('items'));
  localStorage.setItem('items', JSON.stringify([...getLocalStorage, products]));
};

export default localStorageCreate;
