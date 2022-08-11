import { useState } from "react";
import { store } from "../store";
import { useParams } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { CurrencyDollarIcon, GlobeIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getBGColor(color) {
  let bgColor = "bg-white";

  if (color === "Black") {
    bgColor = "bg-black";
  } else if (color === "Brown") {
    bgColor = "bg-yellow-900";
  } else if (color === "Light Brown") {
    bgColor = "bg-yellow-700";
  } else {
    color = "bg-white";
  }

  return bgColor;
}

// function getSelectedVariant(product, selectedColor, selectedSize) {
//   let selectedVariant = null;
//   product.variants.forEach((variant) => {
//     if (
//       variant.selectedOptions[0].value === selectedColor &&
//       variant.selectedOptions[1].value === selectedSize
//     ) {
//       selectedVariant = variant;
//     }
//   });
//   return selectedVariant;
// }

function addVariantToCart(variantId, quantity) {
  const state = store.getState();
  // const variant = state.product.variants.find(variant => variant.id === variantId);
  // console.log(variant)
  // const id = variant.id
  // console.log(id)

  // if (variant.available) {
  const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
  console.log(lineItemsToAdd);
  const checkoutId = state.checkout.id;
  console.log(checkoutId);
  state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((res) => {
    store.dispatch({
      type: "ADD_VARIANT_TO_CART",
      payload: { isCartOpen: true, checkout: res },
    });
  });
  // }
}

export default function ProductDetail() {
  const state = store.getState();
  const [selectedColor, setSelectedColor] = useState(
    state.products[0].variants[0].selectedOptions[0].value
  );
  const [selectedSize, setSelectedSize] = useState(
    state.products[0].variants[1].selectedOptions[1].value
  );

  const id = useParams().id;

  let allProducts = state.products;
  const product = allProducts.find(
    (element) => element.id === "gid://shopify/Product/" + id
  );
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  //get all size for each color
  const sizeByColor = {};
  product.variants.forEach((variant) => {
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

  return (
    <div className="bg-stone-300">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.title}
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
                {product.images.map((image, index) => (
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
                  value={selectedColor}
                  onChange={(e) => {
                    setSelectedColor(e);
                    // setSelectedVariant(
                    //   getSelectedVariant(product, selectedColor, selectedSize)
                    // );
                    console.log(e);
                  }}
                  //   onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {Object.keys(sizeByColor).map((color) => (
                      <RadioGroup.Option
                        key={color}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            getBGColor(color),
                            // active && checked ? "ring ring-offset-1" : "",
                            // !active && checked ? "ring-2" : "",
                            // "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            // active ? "ring ring-offset-1" : "",
                            checked ? "ring-2 ring-offset-1 ring-white" : "",
                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            getBGColor(color),
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
                  value={selectedSize}
                  onChange={(e) => {
                    setSelectedSize(e);
                    console.log(selectedSize);
                  }}
                  //   onChange={setSelectedSize}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {sizeByColor[selectedColor].map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.available
                              ? "cursor-pointer focus:outline-none"
                              : "opacity-25 cursor-not-allowed",
                            // active
                            //   ? "ring-2 ring-offset-2 ring-indigo-500"
                            //   : "",
                            checked
                              ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700 ring-2 ring-offset-2 ring-indigo-500"
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
                onClick={() => {
                  addVariantToCart(selectedVariant.id, 1);
                }}
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
                    __html: product.description,
                  }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  {/* <ul>
                      {product.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul> */}
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
