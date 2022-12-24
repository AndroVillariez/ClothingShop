import { CartAction, CartActionType } from "./actions";
import { CartState } from "./state";

export const shopReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };
    case CartActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };
    case CartActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };
    case CartActionType.ADDTOWISH:
      return {
        ...state,
        wishList: action.payload,
      };
    case CartActionType.REMOVEWISH:
      return {
        ...state,
        wishList: action.payload,
      };
    case CartActionType.UPDATEQTY:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};


//Andro Edsarev S. Villariez