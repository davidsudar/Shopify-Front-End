import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Client from "shopify-buy";
import { Provider } from "react-redux";
import "./styles/shopify.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './store';
// import your necessary custom components.
import  LoadingView  from './components/LoadingView';

// build shopify client
const client = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_STOREFRONTACCESSTOKEN,
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
});
store.dispatch({ type: "CLIENT_CREATED", payload: client });

// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then((res) => {
  
  store.dispatch({ type: "PRODUCTS_FOUND", payload: res });
  console.log(res)
});
client.checkout.create().then((res) => {
  store.dispatch({ type: "CHECKOUT_FOUND", payload: res });
});
client.shop.fetchInfo().then((res) => {
  store.dispatch({ type: "SHOP_FOUND", payload: res });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  // document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
