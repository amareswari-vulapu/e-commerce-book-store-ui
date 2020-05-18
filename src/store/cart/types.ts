//** This file defines the data types for cart page actions. */
import { Inventory } from "../inventory/types";

export interface Cart {
  id: number;
  items: Inventory[];
}

export enum CartActionTypes {
  ADD_TO_CART = "@@cart/ADD_TO_CART",
  REMOVE_FROM_CART = "@@cart/REMOVE_FROM_CART",
  FETCH_CART_REQUEST = "@@cart/FETCH_CART_REQUEST",
  FETCH_CART_SUCCESS = "@@cart/FETCH_CART_SUCCESS",
  FETCH_CART_ERROR = "@@cart/FETCH_CART_ERROR",
  ADD_TO_MY_ORDERS = "@@cart/ADD_TO_My_ORDERS",
  UPDATE_PAGE_NAME = "@@cart/UPDATE_PAGE_NAME"
}

export interface cartState {
   loading: boolean;
   checkout?: boolean;
   data: Cart;
   orderedData?: Cart;
   errors?: string;
   pageName: string;
}