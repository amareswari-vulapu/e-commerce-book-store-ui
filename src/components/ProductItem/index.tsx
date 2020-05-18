//** This file creates the Product Item Component.
import React from "react";
import { connect } from "react-redux";
import * as styles from "./styles";
import { Inventory } from "../../store/inventory/types";
import { addToCart, handlePageName } from "../../store/cart/action";
import { addToSelectedItems } from "../../store/selected-item/action";
import { Link } from "react-router-dom";

interface propsFromComponent {
  item: Inventory;
}

interface propsFromDispatch {
  addToCart: typeof addToCart;
  addToSelectedItems: typeof addToSelectedItems;
  handlePageName: typeof handlePageName;
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item, addToCart, addToSelectedItems, handlePageName }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  const AddItemToSelectedItems = (item: any) => {
    addToSelectedItems(item);
    handlePageName(` | ${item.title}`);
  };

  return (
    <styles.ProductContainer>
     <Link to="/selecteditem" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
      <styles.ProductDetails onClick={() => AddItemToSelectedItems(item)}>
        <styles.ProductFigure>
          <styles.ProductImage src={item.imageLink}/>
        </styles.ProductFigure>
        <styles.ProductHeader>{item.title}</styles.ProductHeader>
        <styles.ProductDescriptionDiv>{item.description}</styles.ProductDescriptionDiv> 
      </styles.ProductDetails>
      </Link> 
      <Link to="/cart">
            <styles.ActionButton onClick={() => AddItemToCart(item)}>Buy Now</styles.ActionButton> 
        </Link> 
      <styles.ActionButton onClick={() => AddItemToCart(item)}>Add To Cart</styles.ActionButton>
    </styles.ProductContainer>
  );
};

const mapDispatchToProps = {
  addToCart,
  addToSelectedItems,
  handlePageName
};

export default connect(null, mapDispatchToProps)(ProductItem);
