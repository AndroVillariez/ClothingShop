import { Product } from "../../models/Product";

export enum CartActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    ADDTOWISH = 'addToWishList',
    REMOVEWISH = 'removeFromWishList',
    UPDATEQTY = 'updateQty'
  }
  export type CartAction = {
    type: CartActionType
    payload: any;
  };
  export const add = (product: Product): CartAction => ({
    type: CartActionType.ADD,
    payload: product,
  });
  export const remove = (product: Product): CartAction => ({
    type: CartActionType.REMOVE,
    payload: product,
  });
  export const update = (total: number): CartAction => ({
    type: CartActionType.UPDATE,
    payload: total,
  });
  export const addToWishList = (product: Product): CartAction => ({
    type: CartActionType.ADDTOWISH,
    payload: product,
  });
  export const removeFromWishList = (product: Product): CartAction => ({
    type: CartActionType.REMOVEWISH,
    payload: product
  })
  export const updateQty = (product: Product): CartAction => ({
    type: CartActionType.UPDATEQTY,
    payload: product,
  });

  
  //Andro Edsarev S. Villariez