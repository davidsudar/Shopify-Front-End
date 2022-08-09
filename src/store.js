// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import reducer from './reducers/cart'; // the value from combineReducers

// const persistConfig = {
//  key: 'root',
//  storage: storage,
// //  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

// const pReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/cart";
import storageSession from "redux-persist/es/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: ["client"],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

// import { createStore } from "redux";
// import reducer from "./reducers/cart";
// export default createStore(reducer);
