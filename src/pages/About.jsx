import React, { Component } from 'react';
import { getProductById } from '../services/api';

export default class About extends Component {
  state = {
    categoriasID: [],
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = async (id) => {
    const apiID = await getProductById(id);
    this.setState({ categoriasID: apiID.results });
  };

  render() {
    const { categoriasID } = this.state;
    return (
      <section data-testid="product">
        <h1 data-testid="product-detail-name">{ categoriasID.title }</h1>
        <img
          data-testid="product-detail-image"
          src={ categoriasID.thumbnail }
          alt="Imagem"
        />
        <p data-testid="product-detail-price">{ categoriasID.price }</p>
        <button type="button" data-testid="shopping-cart-button">Adicionar</button>
      </section>
    );
  }
}
