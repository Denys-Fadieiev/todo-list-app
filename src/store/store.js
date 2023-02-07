import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from './slices/index';

const store = configureStore({
  reducer: {
    todoListState: todoListReducer,
  },
});

export default store;