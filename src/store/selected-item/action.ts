// *** This file defines the actions for selected item */
import { SelectedItemTypes, SelectedItems } from "./types";
import { Inventory } from "../inventory/types";
import { action } from "typesafe-actions";

export const fetchSelectedItemsRequest = () =>
  action(SelectedItemTypes.FETCH_SELECTED_ITEMS_REQUEST);

export const fetchSuccess = (data: SelectedItems) =>
  action(SelectedItemTypes.FETCH_SELECTED_ITEMS_SUCCESS, data);

export const fetchError = (message: string) =>
  action(SelectedItemTypes.FETCH_SELECTED_ITEMS_ERROR, message);

export const addToSelectedItems = (item: Inventory) =>
  action(SelectedItemTypes.ADD_TO_SELECTED_ITEMS, item);
