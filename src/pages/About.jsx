import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class About extends Component {
  state = {
    categoriasID: [],
  };

  async componentDidMount() {
    await this.handleClick();
  }

  handleClick = async () => {
    const { match: { params: { id } } } = this.props;
    const apiID = await getProductById(id);
    this.setState({ categoriasID: apiID });
  };

  localStorageCreate = (categoriasID) => {
    if (!JSON.parse(localStorage.getItem('items'))) {
      localStorage.setItem('items', JSON.stringify([]));
    }

    const getLocalStorage = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items', JSON.stringify([...getLocalStorage, categoriasID]));
  }; 

  render() {
    const { categoriasID } = this.state;
    return (
      <section>
        <h1 data-testid="product-detail-name">{ categoriasID.title }</h1>
        <img
          data-testid="product-detail-image"
          src={ categoriasID.thumbnail }
          alt="Imagem"
        />
        <p data-testid="product-detail-price">{ categoriasID.price }</p>
        <Link to="/card" data-testid="product-add-to-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.localStorageCreate(categoriasID) }
        >
          Adiciona
        </button>
      </section>
    );
  }
}

About.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;
