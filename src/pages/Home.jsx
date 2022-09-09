import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categorias from '../components/Categorias';

export default class Home extends Component {
  state = {
    inputValue: '',
    inputCategory: [],
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
    const api = await getProductsFromCategoryAndQuery(undefined, inputValue);
    this.setState({
      inputCategory: api.results,
      validation: true,
    });
  };

  render() {
    const { inputValue, inputCategory, validation } = this.state;

    return (
      <div className="home">
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
            <div className="input-products">
              {inputCategory.map((products) => (
                <div
                  data-testid="product"
                  key={ products.id }
                >
                  <img src={ products.thumbnail } alt="Product Images" />
                  <h1>{ products.title }</h1>
                  <p>{ products.price }</p>
                  <button type="button">Adicionar</button>
                </div>
              ))}
            </div>
          ) : <p>Nenhum produto foi encontrado</p>}
        </section>
        <Categorias />
      </div>
    );
  }
}
