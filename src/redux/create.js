import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middlewares/clientMiddleware';
import reducer from "./modules/reducer";

export default function createStore(client, data) {
  // Sync dispatched route actions to the history

  const middleware = [createMiddleware(client)];

  const finalCreateStore = compose(
    applyMiddleware(...middleware),
  )(_createStore);

  const store = finalCreateStore(reducer, data);

  return store;
}
