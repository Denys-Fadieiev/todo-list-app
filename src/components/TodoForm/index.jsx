import { Formik, Form } from 'formik';
import React from 'react';
import Input from './Input';


const TodoForm = () => {
  const initialValues = {todoText: '',};

  const handleSubmit = (values, formikBag) => {

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={3}
    >
      <Form>
        <Input
          type='text'
          name='todotext'
          placeholder='Add Todo'
          autoFocus
        />
        <button type='submit'>Add Todo</button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
