import React from 'react';
import {Formik, Form, Field, useField} from 'formik';

//Yup Validation

const MyForm3 = () => {

  const initialValues = {}

  const onSubmit = (values, actions) => {

  }

  const validate = (values) => {

  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>{
      formik => (
        <Form>

        </Form>
      )
    }</Formik>
  );
}


export default MyForm3;