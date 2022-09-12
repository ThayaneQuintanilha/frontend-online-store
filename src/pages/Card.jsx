import React, { Component } from 'react';
import localStorageCreate from '../services/localStorage';

export default class Card extends Component {
  state = {
    storage: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const get = JSON.parse(localStorage.getItem('items'));
    this.setState({ storage: get || [] });
  }

  removeButton = (items) => { // Ajuda do HIGOR MARANHÃO TRIBO A!
    const get = JSON.parse(localStorage.getItem('items'));
    const filterItems = get.filter((item) => item.id === items.id);
    if (filterItems.length !== 1) {
      const getItem = get.map((item) => item.id);
      const index = getItem.lastIndexOf(items.id);
      get.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(get));
    }
    this.getLocalStorage();
  };

  incrementButton = (item) => {
    localStorageCreate(item);
    this.getLocalStorage();
  };

  removeAllItems = (items) => {
    const get = JSON.parse(localStorage.getItem('items'));
    const filterItems = get.filter((item) => item.id !== items.id);
    localStorage.setItem('items', JSON.stringify(filterItems));
    this.getLocalStorage();
  };

  render() {
    const { storage } = this.state;
    return (
      <div>
        {storage.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio.</p>)
          : storage.filter(function filtrarLocalStorage(a) {
            const verify = !this[a.id] && (this[a.id] = true);
            return verify;
          }, Object.create(null))
            .map((item) => (
              <div key={ item.id }>
                <img src={ item.thumbnail } alt="title" />
                <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
                <p>{ `R$ ${item.price}` }</p>
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  {storage.filter((qtd) => qtd.id === item.id).length}
                </p>
                <button
                  className="mais"
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.removeButton(item) }
                >
                  -
                </button>
                <button
                  className="mais"
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.incrementButton(item) }
                >
                  +
                </button>
                <button
                  type="button"
                  className="mais"
                  data-testid="remove-product"
                  onClick={ () => this.removeAllItems(item) }
                >
                  Remover TUDO
                </button>
              </div>
            ))}
      </div>
    );
  }
}
