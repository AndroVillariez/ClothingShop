import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';
import { Cart } from '../Cart';
import { Products } from '../Products';
import { CartContext} from '../useContext';
import { useReducer } from 'react';
import { shopReducer, add, remove, update, initialState, addToWishList, removeFromWishList,updateQty} from '../useReducer';
import { Product } from '../../models';
import { Wishlist } from '../WishList/WishList';
import { CheckOut } from '../CheckOutPage';

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  
 
  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch( add(updatedCart));
  };

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const addWishlist = (product: Product) => {
    const wishlist = state.wishList.concat(product);

    dispatch(addToWishList(wishlist));
  };

  const removeWishlist = (product: Product) => {
    const wishlist = state.wishList.filter(
      (selectedProduct: Product) => selectedProduct.name !== product.name
    );

    dispatch(removeFromWishList(wishlist));
  };

  const updateQuantity = (product: Product) => {

    const updatedCart = state.products.map((item: {name: String, quantity: number, price: number}, ) =>{
      if(item.name === product.name){
        const updatedItem = {
          ...item, quantity: product.quantity,
        }
        return updatedItem;
      }

      console.log(product.price, product.quantity);
      return item;
    }
    );
  
    updatePrice(updatedCart);
    dispatch(updateQty(updatedCart))

  }

  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach((product: {quantity: number; price: number; }) => (total = total + (product.price * product.quantity)));

    dispatch(update(total));
  };
  const Value = {
    total: state.total,
    products: state.products,
    wishList: state.wishList,
    addToCart,
    removeItem,
    addWishlist,
    removeWishlist,
    updateQuantity,
  }
  return (
    <CartContext.Provider value={Value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
          <Link to ='/Wishlist'>Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/CheckOut' element={<CheckOut />} />
        </Routes>
      </Wrapper>
    </CartContext.Provider>
  );
};


//Andro Edsarev S. Villariez
