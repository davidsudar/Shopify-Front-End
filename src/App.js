import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./components/shopify/Cart";
import {store} from "./store";
import Main from "./components/shared/Main";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";

class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    state.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        store.dispatch({
          type: "UPDATE_QUANTITY_IN_CART",
          payload: { checkout: res },
        });
      });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    state.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        store.dispatch({
          type: "REMOVE_LINE_ITEM_IN_CART",
          payload: { checkout: res },
        });
      });
  }
  handleCartClose() {
    store.dispatch({ type: "CLOSE_CART" });
  }
  handleCartOpen() {
    store.dispatch({ type: "OPEN_CART" });
  }
  render() {
    const state = store.getState(); // state from redux store
    return (
      <div className="relative">
        <div className="bg-stone-300 min-h-screen pb-8">
          <Nav handleCartOpen={this.handleCartOpen} />
          <Cart
            checkout={state.checkout}
            isCartOpen={state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          />
          <Main />
        </div>
        <Footer className="" />
      </div>
    );
  }
}

export default connect((state) => state)(App);
