// *** This file contains the reducer functions for cart page. */
import { Reducer } from "redux";
import { CartActionTypes, cartState } from "./types";

export const initialState: cartState = {
  data: {
    id: 0,
    items: []
  },
  orderedData: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false,
  pageName: "eCommerce Site"
};

const reducer: Reducer<any> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        },
        orderedData: {
          ...state.orderedData,
          id: state.orderedData.id,
          items: [...state.orderedData.items, action.payload]
        },
        pageName: state.pageName
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        pageName: state.pageName,
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter((item: any) => item !== action.payload)
        },
        orderedData: {
          ...state.orderedData,
          id: state.orderedData.id,
          items: state.orderedData.items.filter((item: any) => item !== action.payload)
      },
      };
    }
    case CartActionTypes.ADD_TO_MY_ORDERS: {
      return {
        errors: state.errors,
        loading: state.loading,
        checkout: true,
        pageName: "eCommerce Site | My Orders",
        data: {
          id: 0,
          items: []
        },
        orderedData: {
          ...state.orderedData
        },
      };
    }
    case CartActionTypes.UPDATE_PAGE_NAME: {
      console.log(" ### from update page name ###", action.payload);
      return {
        errors: state.errors,
        loading: state.loading,
        checkout: state.checkout,
        pageName: `eCommerce Site ${action.payload}`,
        data: {
          ...state.data
        },
        orderedData: {
          ...state.orderedData
      },
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as cartReducer };
