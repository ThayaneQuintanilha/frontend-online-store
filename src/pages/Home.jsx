import React, { Component } from 'react';

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
