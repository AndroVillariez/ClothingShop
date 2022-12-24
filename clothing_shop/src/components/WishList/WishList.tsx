import { ProductsWrapper, Title } from './WishList.styled';
import { ProductCard } from '../ProductCard';
import { useContext } from 'react';
import { CartContext } from '../useContext';

export const Wishlist = () => {
  const {wishList} = useContext(CartContext);

  return (
    <>
      <Title>Your Wishlist Items:</Title>
      <ProductsWrapper>
      {wishList.map((product, index) => (
          <ProductCard key={index} {...product} />
        
        ))}
      </ProductsWrapper>
    </>
  );
};


//Andro Edsarev S. Villariez