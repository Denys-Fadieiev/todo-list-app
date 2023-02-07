import React from "react";
import DateTodoList from "../../components/Date";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import styles from "./TodoPage.module.scss";

const { container, title, wrapper } = styles;

function TodoPage() {
	return (
		<section className={container}>
			<div className={wrapper}>
				<h2 className={title}>just to do it</h2>
				<DateTodoList />
				<TodoList />
			</div>
			<TodoForm />
		</section>
	);
}

export default TodoPage;
