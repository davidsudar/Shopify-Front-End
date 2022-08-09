import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import VariantSelector from "./VariantSelector";
// import { ShoppingBagIcon } from "@heroicons/react/outline";

// constants
// const ONE_SIZE_FITS_MOST = "One Size Fits Most";

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  }

  render() {
    // let aOptionNames = [];
    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    // let oVariantTypes = this.props.products.map((product) => {
    //   return (
    //     <label className="text-center">
    //     <input
    //       type="radio"
    //       className="w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg"
    //       name="color"
    //       value={product.name}
    //     />
    //     {product.name}
    //   </label>
    //   );
    // });
    // let variantQuantity = this.state.selectedVariantQuantity || 1;
    // let description = this.props.product.description;
    let productName = this.props.product.title;
    let productId = /[^/]*$/.exec(this.props.product.id)[0];
    console.log(productId);

    // let variantSelectors = this.props.product.options.map((option) => {
    //   return (
    //     <VariantSelector
    //       handleOptionChange={this.handleOptionChange}
    //       key={option.id.toString()}
    //       option={option}
    //     />
    //   );
    // });
    // let bShowOneSizeFitsMost =
    //   variantSelectors.length === 1 && aOptionNames[0] === "Title";
    return (
      <li
        key={productId}
        className="w-64 inline-flex flex-col text-center lg:w-auto"
      >
        <div className="group relative">
          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img
              src={variantImage.src}
              alt={productName}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="mt-6">
            <h3 className="mt-1 font-semibold text-gray-900">
              <NavLink to={`/details/${productId}`}>
                <span className="absolute inset-0" />
                {productName}
              </NavLink>
            </h3>
            <p className="mt-1 text-gray-900">${variant.price}</p>
          </div>
        </div>
        <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, 1)}>Add to Cart</button>

        {/* figure out why flex isn't working */}
        {/* <h4 className="sr-only">Available colors</h4>
        <ul className="flex items-center justify-center space-x-3">
          {variantSelectors}
        </ul> */}
      </li>
    );
  }
}

export default Product;
