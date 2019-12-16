import React from "react";
import { Formik, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

const MyForm = () => {
  const initValues = { firstName: "", lastName: "" };

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

            <Field type="input" name="firstName" as={TextField} placeholder="First Name" /><br/><br/>
            <Field type="input" name="lastName" as={TextField} placeholder="Last Name" />
 
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
