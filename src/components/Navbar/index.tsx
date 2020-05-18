//** This file creates the Navbar Component.
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import  * as styles from "./styles";
import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
import { handlePageName } from "../../store/cart/action";

interface propsFromState {
  data: Cart;
  pageName: string;
}

interface propsFromDispatch {
  handlePageName: typeof handlePageName;
}

type AllProps = propsFromState & propsFromDispatch;

const Navbar: React.FC<AllProps> = ({ data, pageName,handlePageName, children }) => {
  const handleName = (str: any) => {
    handlePageName(str);
  };
  return (
    <div>
      <styles.NavContainer>
        <styles.NavHeader>{pageName}</styles.NavHeader>
        <styles.NavCart>
          <Link to="/">
          <styles.NavSpan onClick={()=>handleName(' ')}>Home | </styles.NavSpan>
          </Link>
          <Link to="/myorders">
          <styles.NavSpan onClick={()=>handleName(' | My Orders')}>My Orders |</styles.NavSpan>
          </Link>
          <Link to="/cart">
          <styles.NavSpan onClick={()=>handleName('| Cart')}>Cart </styles.NavSpan> 
          <styles.CartSize>{data.items.length}</styles.CartSize> 
          </Link>
        </styles.NavCart>
      </styles.NavContainer>
      {children}
    </div>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  pageName: cart.pageName
});

const mapDispatchToProps = {
  handlePageName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
