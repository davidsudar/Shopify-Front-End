import React from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import LogoMobile from "../../Assets/Logo-White.png";
import Logo from "../../Assets/Logo-Name-White.png";
// import DarkModeToggle from "./DarkModeToggle";

const navigation = [
  { name: "Sizing Guide", href: "/sizing"},
  { name: "FAQ", href: "/faq"},
  { name: "Contact Us", href: "/contact"},
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

class Nav extends React.Component {
  render() {
    return (
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={LogoMobile}
                        alt="Darkes"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={Logo}
                        alt="Workflow"
                      />
                    </NavLink>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          // className={classNames(
                          //   item.current
                          //     ? "bg-gray-900 text-white"
                          //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          //   "px-3 py-2 rounded-md text-sm font-medium"
                          // )}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {" "}
                          {item.name}{" "}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={this.props.handleCartOpen}
                  >
                    <span className="sr-only">View Cart</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                    
                  </button>
                </div>
                {/* <DarkModeToggle /> */}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    // className={classNames(
                    //   item.current
                    //     ? "bg-gray-900 text-white"
                    //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    //   "block px-3 py-2 rounded-md text-base font-medium"
                    // )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {" "}
                    {item.name}{" "}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
}

export default Nav;
