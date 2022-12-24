import { useContext } from "react";
import { CartContext } from "../useContext";
import { Product } from "../../models/Product";
import { Title } from "../Cart";
import {Cell, CheckOutHeader, CheckOutTable, ProductsWrapper, OrderButton,} from "./CheckOut.styled";

export const CheckOut = () => {
  const { products, total } = useContext(CartContext);

  return (
    <>
      <Title>Checkout</Title>
      <CheckOutTable>
        <thead>
          <tr>
            <CheckOutHeader>Item</CheckOutHeader>
            <CheckOutHeader>Name</CheckOutHeader>
            <CheckOutHeader>Price</CheckOutHeader>
            <CheckOutHeader>Quantity</CheckOutHeader>
            <CheckOutHeader>Amount</CheckOutHeader>
          </tr>
        </thead>
        {products.map((product: Product, index) => (
          <tbody key={index}>
            <tr>
              <Cell>
                <ProductsWrapper background={product.imageUrl}></ProductsWrapper>
              </Cell>
              <Cell>
                <p>{product.name}</p>
              </Cell>
              <Cell>
                <p>${product.price}.00</p>
              </Cell>
              <Cell>
                <p>{product.quantity}</p>
              </Cell>
              <Cell>
                <p>${product.price * product.quantity}.00</p>
              </Cell>
            </tr>
          </tbody>
        ))}
      </CheckOutTable>
      <Title>
        Total Payment: ${total}.00
      <OrderButton>
      <p>Place your order</p>
    </OrderButton>
      </Title>
    </>
  );
};


//Andro Edsarev S. Villariez