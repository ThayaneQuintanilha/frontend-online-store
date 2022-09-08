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
            name="categorys-data"
            data-testid="category"
          >
            <input
              type="radio"
              name="categorys-data"
              id={ cat.id }
            />
            { cat.name }
          </label>
        ))}
      </section>
    );
  }
}
