import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categorias extends Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const api = await getCategories();
    this.setState({ categorias: api });
  };

  render() {
    const { categorias } = this.state;
    console.log(categorias);
    return (
      <section>
        {categorias.map((cat) => (
          <label
            htmlFor={ cat.id }
            key={ cat.id }
            data-testid="category"
            name="categorys-data"
          >
            <input
              type="radio"
              data-testid="category"
              name="categorys-data"
              value={ cat.name }
              id={ cat.id }
            />
            { cat.name }
          </label>
        ))}
      </section>
    );
  }
}
