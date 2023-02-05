import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slices/index';

const store = configureStore({
  reducer: {
    tidoListState: todoListReducer,
  },
});

export default store;