// *** This file defines the actions for cart page. */
import { action } from "typesafe-actions";
import { CartActionTypes, Cart, cartState } from "./types";
import { Inventory } from "../inventory/types";

export const fetchCartRequest = () =>
  action(CartActionTypes.FETCH_CART_REQUEST);

export const fetchSuccess = (data: Cart) =>
  action(CartActionTypes.FETCH_CART_SUCCESS, data);

export const fetchError = (message: string) =>
  action(CartActionTypes.FETCH_CART_ERROR, message);

export const addToCart = (item: Inventory) =>
  action(CartActionTypes.ADD_TO_CART, item);

export const removeFromCart = (item: Inventory) =>
  action(CartActionTypes.REMOVE_FROM_CART, item);

export const addToMyOrders = (item: Inventory) =>
  action(CartActionTypes.ADD_TO_MY_ORDERS, item);

export const handlePageName = (name: string) =>
  action(CartActionTypes.UPDATE_PAGE_NAME, name);


  