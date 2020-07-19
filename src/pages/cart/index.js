import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Content, CartItems, Item, Table } from "./styles";

import SelectQuantity from "../../components/selectQuantity";
import Input from "../../components/input";

import Logo from "../../assets/images/logo.png";
import Roupa from "../../assets/images/roupa.jpg";

const Cart = () => {
  const history = useHistory();
  const [address, setAdress] = useState({
    name: "",
    whatsapp: "",
    street: "",
    number: 0,
    neighborhood: "",
    city: "",
    reference: "",
  });

  const handleAddress = (event) => {
    setAdress({ ...address, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Content>
        <img className="logo" src={Logo} alt="logo" />
        <div className="header">
          <button type="button" onClick={() => history.goBack()}>
            <svg
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.12 1.62L8.5 0L0 8.5L8.5 17L10.12 15.38L3.24 8.5L10.12 1.62Z"
                fill="#9E9E9E"
              />
            </svg>
          </button>
          <h2>Carrinho de compras</h2>
        </div>
        <h4>Produtos</h4>
        <CartItems>
          <Item>
            <img className="image" src={Roupa} alt="roupa" />
            <div className="info">
              <h4>Nome do Produto</h4>
              <div className="info__price">
                <strong>R$ 129,90</strong>
                <span> por unidade</span>
              </div>
              <SelectQuantity />
            </div>
          </Item>
          <Item>
            <img className="image" src={Roupa} alt="roupa" />
            <div className="info">
              <h4>Nome do Produto</h4>
              <div className="info__price">
                <strong>R$ 129,90</strong>
                <span> por unidade</span>
              </div>
              <SelectQuantity />
            </div>
          </Item>
        </CartItems>
        <div className="values">
          <Table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Produto</td>
                <td>2</td>
                <td>R$ 129,90</td>
              </tr>
              <tr>
                <td>Produto</td>
                <td>2</td>
                <td>R$ 129,90</td>
              </tr>
              <tr className="total">
                <td className="total__label">Total</td>
                <td />
                <td>R$ 129,90</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <h4>Informações para entrega</h4>
        <form>
          <Input
            hangleChange={handleAddress}
            label="Nome"
            name="name"
            value={address.name}
          />
          <Input
            hangleChange={handleAddress}
            label="WhatsApp"
            name="whatsapp"
            value={address.whatsapp}
          />

          <div className="input-group">
            <Input
              hangleChange={handleAddress}
              label="Endereço"
              isGroup
              name="address"
              value={address.address}
            />
            <Input
              hangleChange={handleAddress}
              label="Numero"
              isGroup
              name="number"
              value={address.number}
            />
          </div>
          <div className="input-group">
            <Input
              hangleChange={handleAddress}
              label="Bairro"
              isGroup
              name="neighborhood"
              value={address.neighborhood}
            />
            <Input
              hangleChange={handleAddress}
              label="Cidade"
              isGroup
              name="city"
              value={address.city}
            />
          </div>
          <Input
            hangleChange={handleAddress}
            label="Ponto de referencia"
            name="reference"
            value={address.reference}
          />
        </form>
      </Content>
    </Container>
  );
};
export default Cart;
