// @flow weak

import {
  createStore,
  compose,
  applyMiddleware
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import rootReducer                  from './reducers';
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware
  ),
);
// #endregion

// #region store initialization
export default (initialState, {isServer, req, debug, storeKey}) => {
  if (isServer) {
    initialState = initialState || {fromServer: 'foo'};

    return createStore(rootReducer, initialState, enhancer);

  } else {

      // we need it only on client side
      const {persistStore, persistReducer} = require('redux-persist');
      const storage = require('redux-persist/lib/storage').default;

      const persistConfig = {
          key: 'nextjs',
          whitelist: ['user', 'token'], // make sure it does not clash with server keys
          storage
      };

      const persistedReducer = persistReducer(persistConfig, rootReducer);
      const store = createStore(persistedReducer, initialState, enhancer);

      store.__persistor = persistStore(store); // Nasty hack

      return store;
  }
}