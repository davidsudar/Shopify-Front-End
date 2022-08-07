import React, { Component } from "react";
import Product from "./Product";


class Products extends Component {
  render() {
    let products;
    if (this.props.products) {
      products = this.props.products.map((product) => {
        return (
          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            key={product.id.toString()}
            product={product}
          />
        );
      });
    } else {
      products = <p>Loading...</p>;
    }
    products.reverse(); // CHFE 2018.10.15 - this makes it so the products are shown newest to oldest on first load
    return (
      <ul className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
        {products}
      </ul>
    );
  }
}

export default Products;
