import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoListSlice = createSlice({
	name: "todoList",
	initialState: { todoList: [] },
	reducers: {
		addTodo: (state, actions) => {
			state.todoList.push({
				...actions.payload,
        isComplete: false,
				id: v4(),
			});
		},
		deleteTodo: (state, actions) => {
			state.todoList = state.todoList.filter(
				todo => todo.id !== actions.payload
			);
		},
		completeTodo: (state, actions) => {
      state.todoList = state.todoList.map(todo => ({
        ...todo,
        isComplete: todo.id === actions.payload ? !todo.isComplete : todo.isComplete,
      }));
    },
	},
});

const { reducer, actions } = todoListSlice;

export const { addTodo, deleteTodo, completeTodo } = actions;

export default reducer;
