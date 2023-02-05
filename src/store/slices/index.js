import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {todoList: [],},
  reducers: {
    addTodo: (state, actions) => {
      state.todoList.push({
        ...actions.payload,
        id: v4(),
      });
    },
  },
});

const { reducer, actions } = todoListSlice;

export const { addTodo } = actions;

export default reducer;