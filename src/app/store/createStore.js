import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';

function createStore() {
  return configureStore({
    reducer: todosReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
}
export default createStore;
