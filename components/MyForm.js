import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

const MyForm = () => {
  const initValues = { firstName: "Bob", lastName: "Ziroll" };

  const submitForm = (data, {resetForm, setSubmitting}) => {
    console.log(data);

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      resetForm({});
    }, 2000);
  };

  return (
    <div>
      <Formik initialValues={initValues} onSubmit={submitForm}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <TextField name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur}/><br/><br/>

            <TextField name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
 
            <br/><br/>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>Submit</Button>
            <br/><br/>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
