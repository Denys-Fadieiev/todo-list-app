import { Formik, Form } from 'formik';
import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo } from '../../store/slices';
import { TODOLIST_VALIDATION_SCHEMA } from '../../utils/validate/validationSchema';

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
      <Form>
        <Input
          type='text'
          name='todoText'
          placeholder='Add Todo'
          autoFocus
        />
        <button type='submit'>Add Todo</button>
      </Form>
    </Formik>
  );
};

const mapDispathToProps = dispath => ({
  createNewTodo: text => dispath(addTodo(text)),
});

export default connect(null, mapDispathToProps)(TodoForm);
