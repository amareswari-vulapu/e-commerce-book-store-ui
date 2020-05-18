// *** This file contains the reducer functions for selected item. */
import { Reducer } from "redux";
import { SelectedItemTypes, SelectedItems } from "./types";
export const initialState: SelectedItems = {
  items: []
};

const reducer: Reducer<SelectedItems> = (state = initialState, action) => {
  switch (action.type) {

    case SelectedItemTypes.ADD_TO_SELECTED_ITEMS: {
      return { 
        ...state,
        items: action.payload,
        pageName: action.payload.title };
  }
    default: {
      return state;
    }
  }
};
export { reducer as selectedItemsReducer };
