//** This file defines the data types for selected item */
import { Inventory } from "../inventory/types";

export interface SelectedItems {
    items: Inventory[]
  }
  
export enum SelectedItemTypes {
  ADD_TO_SELECTED_ITEMS = "@@cart/ADD_TO_SELECTED_ITEMS",
  ADD_TO_SELECTED_ITEMS_FAILURE = "@@cart/ADD_TO_SELECTED_ITEMS_FAILURE",
  FETCH_SELECTED_ITEMS_REQUEST = "@@cart/FETCH_SELECTED_ITEMS_REQUEST",
  FETCH_SELECTED_ITEMS_SUCCESS = "@@cart/FETCH_SELECTED_ITEMS_SUCCESS",
  FETCH_SELECTED_ITEMS_ERROR = "@@cart/FETCH_SELECTED_ITEMS_ERROR",
}