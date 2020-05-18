//**  This file creates the Selected Item Component.
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as styles from "./styles";
import { SelectedItems } from "../../store/selected-item/types";
import { addToCart } from "../../store/cart/action";
import { Link } from "react-router-dom";
import { ApplicationState } from "../../store";
import { fetchSelectedItemsRequest } from "../../store/selected-item/action";

interface PropsFromState {
  data: SelectedItems;
}

interface propsFromDispatch {
  addToCart: typeof addToCart;
  fetchSelectedItemsRequest: typeof fetchSelectedItemsRequest;
}

type AllProps = PropsFromState & propsFromDispatch;

const SelectedItem: React.FC<any> = ({ data, addToCart, fetchSelectedItemsRequest }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  useEffect(() => {
    fetchSelectedItemsRequest();
  }, []);
  return (
    <styles.ProductContainer>
      <styles.ProductFigure>
        <styles.ProductImage src={data.imageLink}></styles.ProductImage>
      </styles.ProductFigure>
      <styles.ProductDetails>
        <styles.ProductHeader>Book Title: {data.title}</styles.ProductHeader>
        <styles.ProductOtherDetails>Book Price: &#36;{data.price}</styles.ProductOtherDetails>
        <styles.ProductOtherDetails>Author Name: {data.author}</styles.ProductOtherDetails>
        <styles.ProductOtherDetails>Page Count: {data.pages}</styles.ProductOtherDetails>
        <styles.ProductOtherDetails>ISBN: {data.isbn}</styles.ProductOtherDetails>
        <Link to="/cart">
          <styles.ActionButton onClick={() => AddItemToCart(data)}>Buy Now</styles.ActionButton>
        </Link>
        <styles.ActionButton onClick={() => AddItemToCart(data)}>Add To Cart</styles.ActionButton>
        <styles.ProductDescriptionDiv>{data.description}</styles.ProductDescriptionDiv>
      </styles.ProductDetails>
    </styles.ProductContainer>
  );
};

const mapStateToProps = ({ selectedItems }: ApplicationState) => ({
  data: selectedItems.items
});

const mapDispatchToProps = {
  addToCart,
  fetchSelectedItemsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);