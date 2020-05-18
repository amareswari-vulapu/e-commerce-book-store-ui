//** This file creates the Home Page Component.
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as styles from "./styles";
import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { Inventory } from "../../store/inventory/types";
import { fetchRequest } from "../../store/inventory/action";

interface PropsFromState {  
  loading: boolean;
  data: Inventory[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <styles.Container>
      <styles.ProductListItems>
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </styles.ProductListItems>
    </styles.Container>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = {
  fetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
