import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    produtcs: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ produtcs: data });
  }

  render() {
    const { produtcs } = this.state;
    return (
      <ProductList>
        {produtcs.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
