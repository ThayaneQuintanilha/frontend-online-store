import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categorias extends Component {
  state = {
    categorias: [],
    categoriasID: [],
  };

  componentDidMount() {
    this.getApi();
  }

  handleClick = async ({ target }) => {
    const { value } = target;
    const apiID = await getProductsFromCategoryAndQuery(value, null);
    this.setState({ categoriasID: apiID.results });
  };

  getApi = async () => {
    const api = await getCategories();
    this.setState({ categorias: api });
  };

  render() {
    const { categorias, categoriasID } = this.state;
    return (
      <main className="main-category">

        <section className="section-category">
          {categorias.map((cat) => (
            <label
              htmlFor={ cat.id }
              key={ cat.id }
              name="categorys-data"
              data-testid="category"
            >
              <input
                type="radio"
                name="categorys-data"
                value={ cat.id }
                onClick={ this.handleClick }
                // CALLBACK, POIS ELE DEVE EXECUTAR A FUNÇÃO DEPOIS DO CLICK E NÃO QUANDO ABRIR A PÁGINA!
              />
              { cat.name }
            </label>
          ))}
        </section>

        <section className="section-products">
          {categoriasID.map((products) => (
            <div key={ products.id }>
              <Link
                data-testid="product-detail-link"
                to={ `/about/${products.id}` }
              >
                <div data-testid="product" className="products-div">
                  <img
                    src={ products.thumbnail }
                    alt="Product Images"
                  />
                  <li>{ products.details }</li>
                  <h1>{ products.title }</h1>
                  <p>{ products.price }</p>
                </div>
              </Link>
              <button type="button">Adicionar</button>
            </div>
          ))}
        </section>
      </main>
    );
  }
}
