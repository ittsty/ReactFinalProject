import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <MainLayout>
      <CartStyled>
        <InnerLayout>
          <Title title={"Cart"} span={"Cart"} />
          <div className="container">
            <div className="table">
              <div className="col-md-12 mt-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ProductId</th>
                      <th>ProductName</th>
                      <th>ProductPrice</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((c, index) => {
                      return (
                        <tr key={c.id}>
                          <td>{++index}</td>
                          <td>{c.id}</td>
                          <td>{c.name}</td>
                          <td>{c.price}</td>
                          <td>{c.qty}</td>
                          <td>{c.price * c.qty}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </InnerLayout>
      </CartStyled>
    </MainLayout>
  );
};

const CartStyled = styled.div`
  tr:nth-child(even) {
    background-color: var(--sidebar-dark-color);
  }
  tr:nth-child(odd) {
    background-color: var(--background-dark-color);
  }
  color: var(--font-light-color);
  .icon {
    width: 215px;
  }
  th {
    background-color: var(--sidebar-dark-color);
  }
  th,
  td {
    padding: 10px;
    border-color: var(--border-color);
  }
  .table{
    margin-top: 1rem;
    width: 98%;
  }
`;
export default CartPage;
