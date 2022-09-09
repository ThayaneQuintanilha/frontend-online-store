import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    inputValue: '',
    categorias: [],
    validation: false,
  };

  componentDidMount() {
    this.handleClick();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = async () => {
    const { inputValue } = this.state;
    const api = await getProductsFromCategoryAndQuery(inputValue);
    this.setState({
      categorias: api.results,
      validation: true,
    });
    console.log(api.results);
  };

  render() {
    const { inputValue, categorias, validation } = this.state;

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
          {validation === true ? (
            <ul>
              {categorias.map((products) => (
                <li
                  data-testid="product"
                  key={ products.id }
                  thumbnail={ products.thumbnail }
                  title={ products.title }
                  price={ products.price }
                />
              ))}
            </ul>
          ) : <p>Nenhum produto foi encontrado</p>}
        </section>
      </div>
    );
  }
}
