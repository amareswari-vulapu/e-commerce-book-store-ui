//** This file creates the My Orders Component.
import React from "react";
import * as styles from "./styles";
import { ApplicationState } from "../../store";
import { Cart, cartState } from "../../store/cart/types";
import { connect } from "react-redux";

interface propsFromState {
  cartState: cartState;
}

type AllProps = propsFromState;

const MyOrdersComponent: React.FC<AllProps> = ({ cartState}) => {
  const getCurrentDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output =    `${day} ${month}, ${year}`;
    return output;
  }
    if(cartState.checkout && cartState.orderedData){
        return (
          <styles.MyOrdersContainer>
             {cartState.orderedData.items.map(item => {
             return (
             <styles.BookContainer>
                <styles.BookContainerNavBar>
                  <styles.OrderPlacedLabel>Order Placed: {getCurrentDate()}</styles.OrderPlacedLabel>
                  <styles.StatusDeliveredLabel>Status: Delivered</styles.StatusDeliveredLabel>
                </styles.BookContainerNavBar>
                <styles.BookImageContainer>
                  <styles.BookImage src={item.imageLink}></styles.BookImage>
                </styles.BookImageContainer>
                <styles.BookDetailsContainer>
                  <styles.BookTitle>Book Title: {item.title}</styles.BookTitle>
                  <styles.BookDetails>Author Name: {item.author}</styles.BookDetails>
                  <styles.BookDetails>Book Price: &#36;{item.price}</styles.BookDetails>
                </styles.BookDetailsContainer>
             </styles.BookContainer>
            );
          })}
          </styles.MyOrdersContainer> 
        );
    }else {
      return (
        <styles.NoOrder>Sorry, No Orders placed.</styles.NoOrder>
      )
   }
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartState: cart
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(MyOrdersComponent);