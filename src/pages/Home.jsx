import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="Home">
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite aqui"
          />
          <Link to="/card">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              Pesquisar
            </button>
          </Link>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
      </div>
    );
  }
}
