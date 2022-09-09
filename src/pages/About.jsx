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
        <Link to="/card">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </button>
        </Link>
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
