import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

const MyForm = () => {
  const initValues = { firstName: "", lastName: "" };

  const submitForm = (values, {resetForm, setSubmitting}) => {
    console.log(values);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      resetForm({});
    }, 2000);
  };

  return (
    <div>
      <Formik initialValues={initValues} onSubmit={submitForm}>
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <Field name="firstName" as={TextField} placeholder="First Name" /><br/><br/>
            <Field name="lastName" as={TextField} placeholder="Last Name" /><br/><br/>
            
            <Button type="submit" variant="contained" disabled={isSubmitting}>Submit</Button><br/><br/>
          
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
