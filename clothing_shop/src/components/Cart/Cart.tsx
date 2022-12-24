import { useContext } from "react";
import { CartContext, } from "../useContext/cartContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, CartItem, QuantityDiv, QuantityButton, CheckOutButton} from "./Cart.styled";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { products, total, updateQuantity } = useContext(CartContext);
  const nav = useNavigate();

  const handleAddition = (product: Product) =>{
    product.quantity += 1;
    updateQuantity(product);
  }

  const handleSubtraction = (product: Product) =>{
    if(product.quantity > 1){
       product.quantity -= 1;
        updateQuantity(product);
    }
  }

  return (
    <>
      <Title>Your cart total is ${total}</Title>
      <ProductsWrapper>
      <ProductsWrapper>
        {products.map((product, index) => (
          <CartItem key={index}>
          <ProductCard  {...product} />
          <QuantityDiv>
          <QuantityButton onClick={() => handleSubtraction(product)}>
          <p>-</p>
          </QuantityButton>
          <p>{product.quantity}</p>
          <QuantityButton onClick={() => handleAddition(product)}>
          <p>+</p>
          </QuantityButton>
          </QuantityDiv>
          </CartItem>
        ))}
      </ProductsWrapper>
      </ProductsWrapper>  
      {total != 0 && <CheckOutButton onClick={() =>nav('/CheckOut')}>
          <p>Proceed to checkout</p>
        </CheckOutButton>
      }
    </>
  );
};


//Andro Edsarev S. Villariez