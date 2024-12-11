import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import rootSaga from "./sagas";
import rootReducers from "./reducers";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  version: 0.1,
  whitelist: ["Auth", "User"],
};

export const configureStore = (initialStore = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [ sagaMiddleware];
  const persistedReducer = persistReducer(persistConfig, rootReducers);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    initialStore,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
