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

  localStorageCreate = (products) => {
    products.qtd = 1;
    if (!JSON.parse(localStorage.getItem('items'))) {
      localStorage.setItem('items', JSON.stringify([]));
    }

    const getLocalStorage = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items', JSON.stringify([...getLocalStorage, products]));
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
            <div className="input-products-main">
              {inputCategory.map((products) => (
                <div className="input-products" key={ products.id }>
                  <Link
                    data-testid="product-detail-link"
                    to={ `/about/${products.id}` }
                  >
                    <div
                      data-testid="product"
                    >
                      <img src={ products.thumbnail } alt="Product Images" />
                      <h1 data-testid="shopping-cart-product-name">{ products.title }</h1>
                      <p>{ products.price }</p>
                    </div>
                  </Link>
                  <button
                    data-testid="product-add-to-cart"
                    type="button"
                    onClick={ () => this.localStorageCreate(products) }
                  >
                    OLÁ
                  </button>
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
