import { AddButton, SubTitle,TextContainer,Title,Wrapper,WishButton,} from './ProductCard.styled';
import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { CartContext} from "../useContext";
import { RiHeartAddLine } from 'react-icons/Ri';

export const ProductCard = ({ name, imageUrl, price, quantity }: Product) => {
  const {products, wishList, addToCart, addWishlist, removeItem, removeWishlist} = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const itemInCart  = products.find((product: {name: string;})=> product.name === name);

    if (itemInCart ) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  useEffect(() => {
    const checkWishlist = wishList.find((product: {name: string;})=> product.name === name);

    if(checkWishlist){
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishList, name]);

  const handleCartClick = () =>{
    const product = {name, imageUrl, price, quantity};
    if (isInCart){
      product.quantity = 0;
      removeItem(product);
      setIsInCart(false);
    } else {
      product.quantity = 1;
      addToCart(product);
      setIsInCart(true);
    }
  };

  const handleWishlistClick = () =>{
    const item = {name, imageUrl, price, quantity};
    if (isInWishlist){
      removeWishlist(item);
      setIsInWishlist(false);
    } else {
      addWishlist(item);
      setIsInWishlist(true);
    }
  }
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleCartClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <WishButton isInWishlist={isInWishlist} onClick={handleWishlistClick}>
        <p><RiHeartAddLine/></p>
      </WishButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};


//Andro Edsarev S. Villariez