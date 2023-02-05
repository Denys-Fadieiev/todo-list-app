import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteTodo, completeTodo } from '../../store/slices';

const TodoList = ({ todoList, remove, complete }) => {
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completeTodo}
            onChange={() => complete(todo.id)}
          />
          <p>{todo.todoText}</p>
          <button onClick={() => remove(todo.id)}>
            <AiOutlineDelete/>
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ tidoListState }) => tidoListState;

const mapDispatchToProps = dispatch => ({ 
  remove: id => dispatch(deleteTodo(id)),
  complete: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
