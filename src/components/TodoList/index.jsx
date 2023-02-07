import React from 'react';
import { connect } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { deleteTodo, completeTodo } from '../../store/slices';
import styles from './TodoList.module.scss';

const { listContainer, item, checkbox, checkboxInput, checkboxLabel, btnDel } = styles;

const TodoList = ({ todoList, remove, complete }) => {
  return (
    <ul className={listContainer}>
      {todoList.map(todo => (
        <li key={todo.id} className={item}>
          <div className={checkbox}>
            <input
              id='checkbox'
              type='checkbox'
              checked={todo.completeTodo}
              onChange={() => complete(todo.id)}
              className={checkboxInput}
            />
            <label className={checkboxLabel} for='checkbox'>{todo.todoText}</label>
          </div>
          <button onClick={() => remove(todo.id)} className={btnDel}>
            <AiFillDelete/>
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todoListState }) => todoListState;

const mapDispatchToProps = dispatch => ({ 
  remove: id => dispatch(deleteTodo(id)),
  complete: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
