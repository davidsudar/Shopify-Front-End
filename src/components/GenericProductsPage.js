import React from "react";
import Products from "./shopify/Products";
import { connect } from "react-redux";
import store from "../store";

class GenericProductsPage extends React.Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }
  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;
    state.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        store.dispatch({
          type: "ADD_VARIANT_TO_CART",
          payload: { isCartOpen: true, checkout: res },
        });
      });
  }
  render() {
    const state = store.getState(); // state from redux store
    let oProducts = (
      <Products
        products={state.products}
        client={state.client}
        addVariantToCart={this.addVariantToCart}
      />
    );
    return (
      <div>
        <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
          <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
            <a href="/#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="mt-8 relative">
            <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
              
          {oProducts}
          </div>
          </div>
  
          <div className="mt-12 flex px-4 sm:hidden">
            <a href="/#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(GenericProductsPage);
