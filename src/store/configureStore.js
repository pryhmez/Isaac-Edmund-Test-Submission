import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage";
import getRootReducer from "../reducers";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  blacklist: ['page'],
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, getRootReducer()); // create a persisted reducer

export default () => {
  //store

  const store = createStore(
    //    getRootReducer(),
    persistedReducer,
    undefined,
    applyMiddleware(thunk)
  );

  const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

  return { store, persistor };

  //   return store;
};
