import { Formik, Form } from 'formik';
import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo } from '../../store/slices';
import { TODOLIST_VALIDATION_SCHEMA } from '../../utils/validate/validationSchema';
import styles from './TodoForm.module.scss';

const { formAddTodo, btnAddTodo } = styles;

const TodoForm = ({createNewTodo}) => {
  const initialValues = {todoText: '',};

  const handleSubmit = (values, formikBag) => {
    createNewTodo(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODOLIST_VALIDATION_SCHEMA}
    >
      <Form className={formAddTodo}>
        <Input
          type='text'
          name='todoText'
          placeholder='Add Todo'
          autoFocus
          styles={styles}
        />
        <button 
          type='submit'
          className={btnAddTodo}
        >Add</button>
      </Form>
    </Formik>
  );
};

const mapDispathToProps = dispath => ({
  createNewTodo: text => dispath(addTodo(text)),
});

export default connect(null, mapDispathToProps)(TodoForm);
