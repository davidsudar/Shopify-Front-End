import React, { Component } from "react";
import VariantSelector from "./VariantSelector";
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
    let productId = this.props.product.id;

    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
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
              <a href="/#">
                <span className="absolute inset-0" />
                {productName}
              </a>
            </h3>
            <p className="mt-1 text-gray-900">{variant.price}</p>
          </div>
        </div>
        {/* figure out why flex isn't working */}
        {/* <h4 className="sr-only">Available colors</h4>
        <ul className="flex items-center justify-center space-x-3">
          {variantSelectors}
        </ul> */}
      </li>
      // <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow max-w-xl">
      //   <div className="flex-none w-24 md:w-48 relative">
      //     <img
      //       src={variantImage.src}
      //       alt={productName}
      //       className="absolute rounded-lg inset-0 w-full h-full object-cover"
      //     />
      //   </div>
      //   <form className="flex-auto p-6">
      //     <div className="flex flex-wrap">
      //       <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
      //         {productName}
      //       </h1>
      //       <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
      //         ${variant.price}
      //       </div>
      //       <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
      //         {variant.available ? "In Stock" : "Sold Out"}
      //       </div>
      //     </div>
      //     <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
      //       <div className="space-x-2 flex">{variantSelectors}</div>
      //       <a
      //         href="/#"
      //         className="ml-auto hidden md:block text-sm text-gray-500 dark:text-gray-300 underline"
      //       >
      //         Size Guide
      //       </a>
      //     </div>
      //     <div className="flex mb-4 text-sm font-medium">
      //       <button
      //         type="button"
      //         className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      //       >
      //         Buy now
      //       </button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default Product;
