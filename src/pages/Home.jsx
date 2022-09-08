import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import categories from '../__mocks__/categories';

export default class Home extends Component {
  state = {
    inputValue: '',
    saveInput: '',
    categorias: [],
  };

  componentDidMount() {
    this.handleClick();
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value
    });
  }

  handleClick = async () => {
    const api = await getProductsFromCategoryAndQuery();
    this.setState({ 
      inputValue: '',
      saveInput: inputValue,
      categorias: api,
    });
  }

  render() {
    const { inputValue, saveInput, categorias } = this.state;

    return (
      <div>
        <label htmlFor="Home">
          <input
            data-testid="query-input"
            type="text"
            name="inputValue"
            value={ inputValue }
            id=""
            placeholder="Digite aqui"
            onChange={ this.handleChange }
          />
          <button
          data-testid="query-button"
          type="button"
          name="inputValue"
          onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <Link to="/card">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              Carrinho
            </button>
          </Link>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
        <section>
          {console.log(categorias)}
        </section>
      </div>
    );
  }
}
