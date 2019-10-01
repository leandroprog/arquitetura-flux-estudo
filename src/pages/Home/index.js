import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_detalhe1.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
