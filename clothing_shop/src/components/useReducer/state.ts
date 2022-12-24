import { Product } from "../../models";

export type CartState = {
    products: Product[],
    wishList: Product[],
    total: number,
    addToCart: any,
    removeItem: any
    addWishlist: any,
    removeWishlist: any,
    updateQuantity: any,
}
export const initialState = {
    products: [],
    wishList: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addWishlist: null,
    removeWishlist: null,
    updateQuantity: null
}


//Andro Edsarev S. Villariez
