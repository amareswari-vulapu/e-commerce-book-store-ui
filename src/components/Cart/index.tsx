// This file creates the Cart Component.
import React from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
import { addToMyOrders } from "../../store/cart/action";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/cart/action";

interface propsFromState {
  cartItems: Cart;
}

interface propsFromDispatch {
  addToMyOrders: typeof addToMyOrders;
  removeFromCart: typeof removeFromCart;
}

type AllProps = propsFromState & propsFromDispatch;

const CartComponent: React.FC<AllProps> = ({
  cartItems,
  addToMyOrders,
  removeFromCart 
 }) => {
  const RemoveItemFromCart = (item: any) => {
    removeFromCart(item);
  };

  let cartTotalPrice: number = 0;
  let shippingCharge: number = 5;
  
  const AddOrderToMyOrders = (cartItems: any) => {
    addToMyOrders(cartItems);
    window.alert("Your order has been placed. Please check MyOrders page for more details.");
  };

  return (
    <styles.CartContainer>
      <styles.CartAddressDiv>
        <styles.Header>Shipping Address</styles.Header>
        <styles.ProductDetails><styles.AddressForm>Address form</styles.AddressForm></styles.ProductDetails>
        <styles.Addressbutton>Save Address button</styles.Addressbutton>
        <styles.Addressbutton>Edit Address button</styles.Addressbutton>
      </styles.CartAddressDiv>
      <styles.CartListsDiv>
      <styles.Header>Shopping Bag</styles.Header>
      <styles.ProductDetails>
      {cartItems.items.map(item => {
        cartTotalPrice = cartTotalPrice + item.price;
          return (
            <div><styles.SelectedItemTitle>{item.title}</styles.SelectedItemTitle>
            <styles.SelectedItemTitle>- &#36;{item.price}</styles.SelectedItemTitle>
            <styles.RemoveButton onClick={() => RemoveItemFromCart(item)}>Remove</styles.RemoveButton></div>
          );
        })}
      </styles.ProductDetails>
      <styles.Header>Payment Info</styles.Header>
         <styles.CartListItemDiv>
            <styles.ItemName>Items Price</styles.ItemName>
            <styles.ItemPrice>&#36;{cartTotalPrice}</styles.ItemPrice>
            {/* Adding 5% of item price as Tax */}
            <styles.ItemName>Tax</styles.ItemName>
            <styles.ItemPrice>&#36;{(cartTotalPrice/100)*5}</styles.ItemPrice>
            <styles.ItemName>Shipping Charge</styles.ItemName>
            <styles.ItemPrice>&#36;{shippingCharge}</styles.ItemPrice>
        </styles.CartListItemDiv>
        <hr/>
        <styles.TotalName>Total </styles.TotalName>
        <styles.TotalPrice>&#36;{cartTotalPrice + ((cartTotalPrice/100)*5) + shippingCharge}</styles.TotalPrice>
        <br/>
        <Link to="/myorders">
          <styles.PaymentButton className='checkoutBtn' onClick={() => AddOrderToMyOrders(cartItems)}>Checkout</styles.PaymentButton>
        </Link>
        <Link to="/">
          <styles.PaymentButton>Cancel</styles.PaymentButton>
        </Link>
      </styles.CartListsDiv>
    </styles.CartContainer>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchToProps = {
    addToMyOrders,
    removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
