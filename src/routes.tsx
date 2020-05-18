// This file contains all the routings to different pages in application.
import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import MyOrders from "./components/MyOrders";
import SelectedItem from "./components/SelectedItem";

const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Navbar>
            <HomePage />
          </Navbar>
        )}
      />
      <Route
        exact
        path="/myorders"
        render={() => (
          <Navbar>
            <MyOrders />
          </Navbar>
        )}
      />
      <Route
        exact
        path="/selecteditem"
        render={() => (
          <Navbar>
            <SelectedItem />
          </Navbar>
        )}
      />
      <Route
        path="/cart"
        render={() => (
          <Navbar>
            <Cart />
          </Navbar>
        )}
      />
    </Switch>
  </div>
);

export default Routes;
