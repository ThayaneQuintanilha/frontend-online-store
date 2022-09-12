import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    storage: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const get = JSON.parse(localStorage.getItem('items'));
    this.setState({ storage: get });
  }

  render() {
    const { storage } = this.state;
    console.log(storage);
    return (
      <div>
        <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio.</p>
        {storage.map(({ id, title, price, thumbnail }) => (
          <div key={ id }>
            <img src={ thumbnail } alt="title" />
            <h1 data-testid="shopping-cart-product-name">{ title }</h1>
            <p>{ `R$ ${price}` }</p>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {storage.filter((qtd) => qtd.id === id).length}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
