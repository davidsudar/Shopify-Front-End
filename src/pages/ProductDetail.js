import React from "react";
import { connect } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { store } from "../store";
import { CurrencyDollarIcon, GlobeIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  addVariantToCart(variantId, quantity) {
    console.log(variantId);
    const state = store.getState();
    if (state.selectedVariant.available) {
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
  }

  UpdateSelectedColor = (value) => {
    const state = store.getState();
    state.selectedColor = value;
    //get unique colours from all variants
  };

  UpdateSelectedVariant = (product) => {
    const state = store.getState();

    state.selectedVariant = product.variants.find(
      (variant) =>
        variant.selectedOptions[0].value === state.selectedColor.name &&
        variant.selectedOptions[1].value === state.selectedSize.shopifyName
    );
  };

  UpdateSelectedSize = (value) => {
    const state = store.getState();
    state.selectedSize = value;
  };

  UpdateSizesStock = () => {
    return [];
  };

  render() {
    const state = store.getState();
    let { id } = this.props.params;
    let oProducts = state.products;
    const product1 = oProducts.find(
      (element) => element.id === "gid://shopify/Product/" + id
    );

    //get all size for each color
    const sizeByColor = {};
    product1.variants.forEach((variant) => {
      let color = variant.selectedOptions[0].value;
      let size = variant.selectedOptions[1].value;
      if (!sizeByColor[color]) {
        sizeByColor[color] = [];
      }
      var name = "";
      switch (size) {
        case "Extra Extra Small":
          name = "XXS";
          break;
        case "Extra Small":
          name = "XS";
          break;
        case "Small":
          name = "S";
          break;
        case "Medium":
          name = "M";
          break;
        case "Large":
          name = "L";
          break;
        case "Extra Large":
          name = "XL";
          break;
        case "Double Extra Large":
          name = "XXL";
          break;
        default:
          break;
      }
      sizeByColor[color].push({
        size: size,
        name: name,
        available: variant.available,
      });
    });
    console.log(sizeByColor);

    //get unique colours from all variants and match to available sizes

    const product = {
      name: "Basic Tee",
      price: "$35",
      rating: 3.9,
      reviewCount: 512,
      href: "#",
      breadcrumbs: [
        { id: 1, name: "Women", href: "#" },
        { id: 2, name: "Clothing", href: "#" },
      ],
      images: [
        {
          id: 1,
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
          imageAlt: "Back of women's Basic Tee in black.",
          primary: true,
        },
        {
          id: 2,
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
          imageAlt: "Side profile of women's Basic Tee in black.",
          primary: false,
        },
        {
          id: 3,
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
          imageAlt: "Front of women's Basic Tee in black.",
          primary: false,
        },
      ],
      colors: [
        {
          name: "Black",
          bgColor: "bg-gray-900",
          selectedColor: "ring-gray-900",
        },
        {
          name: "Heather Grey",
          bgColor: "bg-gray-400",
          selectedColor: "ring-gray-400",
        },
      ],
      sizes: [
        { name: "XXS", inStock: true, shopifyName: "Extra Extra Small" },
        { name: "XS", inStock: true, shopifyName: "Extra Extra Small" },
        { name: "S", inStock: true, shopifyName: "Extra Extra Small" },
        { name: "M", inStock: true, shopifyName: "Extra Extra Small" },
        { name: "L", inStock: true, shopifyName: "Extra Extra Small" },
        { name: "XL", inStock: false, shopifyName: "Extra Extra Small" },
      ],
      description: `
          <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
          <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
        `,
      details: [
        "Only the best materials",
        "Ethically and locally made",
        "Pre-washed and pre-shrunk",
        "Machine wash cold with similar colors",
      ],
    };
    const policies = [
      {
        name: "International delivery",
        icon: GlobeIcon,
        description: "Get your order in 2 years",
      },
      {
        name: "Loyalty rewards",
        icon: CurrencyDollarIcon,
        description: "Don't look at other tees",
      },
    ];

    const colors = [];
    var sizes = [];

    // let variants = product1.variants;

    var colorResult = product1.options.find((obj) => {
      return obj.name === "Color";
    });

    colorResult.values.forEach((value) => {
      let bgColor = "bg-blue-600";
      let color = value.value;

      if (color === "Black") {
        bgColor = "bg-black";
      } else if (color === "Brown") {
        bgColor = "bg-yellow-900";
      } else if (color === "Light Brown") {
        bgColor = "bg-yellow-700";
      } else {
        color = "bg-blue-600";
      }

      colors.push({
        name: value.value,
        bgColor: bgColor,
        selectedColor: "ring-gray-900",
      });
    });

    var sizeResult = product1.options.find((obj) => {
      return obj.name === "Size";
    });

    if (sizeResult) {
      sizeResult.values.forEach((value) => {
        var name = "";
        switch (value.value) {
          case "Extra Extra Small":
            name = "XXS";
            break;
          case "Extra Small":
            name = "XS";
            break;
          case "Small":
            name = "S";
            break;
          case "Medium":
            name = "M";
            break;
          case "Large":
            name = "L";
            break;
          case "Extra Large":
            name = "XL";
            break;
          case "Double Extra Large":
            name = "XXL";
            break;
          default:
            break;
        }

        //get stock for each size and color
        let inStock = product1.variants.find(
          (variant) =>
            variant.selectedOptions[0].value === "Black" &&
            variant.selectedOptions[1].value === value.value
        ).available;

        sizes.push({ name: name, inStock: inStock, shopifyName: value.value });
      });
    }

    state.selectedVariant = product1.variants[0];
    state.selectedColor = colors[0];
    state.selectedSize = sizes[0];
    return (
      
      <div className="bg-stone-300">
        <div className="pt-6 pb-16 sm:pb-24">
          <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
              <div className="lg:col-start-8 lg:col-span-5">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">
                    {product1.title}
                  </h1>
                  <p className="text-xl font-medium text-gray-900">
                    {/* ${variant.price} */}
                  </p>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                  {product1.images.map((image, index) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.altText}
                      className={classNames(
                        index === 0
                          ? "lg:col-span-2 lg:row-span-2"
                          : "hidden lg:block",
                        "rounded-lg"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                {/* <form> */}
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>

                  <RadioGroup
                    value={this.selectedColor}
                    onChange={(e) => {
                      this.UpdateSelectedColor(e);
                      this.UpdateSelectedVariant(product1);
                      sizes.forEach((size) => {
                        size.inStock = false;
                      });
                      this.UpdateSelectedColor(e);
                      this.UpdateSelectedVariant(product1);
                      this.setState({ selectedColor: e });
                    }}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              // active && checked ? "ring ring-offset-1" : "",
                              // !active && checked ? "ring-2" : "",
                              // "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              active ? "ring ring-offset-1" : "",
                              checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <NavLink
                      to="/sizing"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See sizing chart
                    </NavLink>
                  </div>

                  <RadioGroup
                    value={this.selectedSize}
                    onChange={(e) => {
                      this.UpdateSelectedSize(e);
                      this.UpdateSelectedVariant(product1);
                      console.log(state.selectedColor)
                    }}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {sizeByColor[state.selectedColor.name].map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={({ active, checked }) =>
                            classNames(
                              size.available
                                ? "cursor-pointer focus:outline-none"
                                : "opacity-25 cursor-not-allowed",
                              active
                                ? "ring-2 ring-offset-2 ring-indigo-500"
                                : "",
                              checked
                                ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                              "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                            )
                          }
                          disabled={!size.available}
                        >
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() =>
                    this.addVariantToCart(state.selectedVariant.id, 1)
                  }
                >
                  Add to Cart
                </button>
                {/* Product details */}
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>

                  <div
                    className="mt-4 prose prose-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: product1.description,
                    }}
                  />
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">
                    Fabric &amp; Care
                  </h2>

                  <div className="mt-4 prose prose-sm text-gray-500">
                    <ul>
                      {product.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="mt-4 text-sm font-medium text-gray-900">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(withParams(ProductDetail));
