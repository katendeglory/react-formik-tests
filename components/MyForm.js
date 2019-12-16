import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";

const MyForm = () => {
  const initValues = { firstName: "", lastName: "", getEmails: true, cookies: [] };

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
            <Field type="text" name="firstName" as={TextField} placeholder="First Name" /><br/><br/>
            <Field type="text" name="lastName" as={TextField} placeholder="Last Name" /><br/><br/>
            <Field type="checkbox" name="getEmails" as={Checkbox} />Get Emails<br/><br/>

            <div>Cookies:</div>
            <Field type="checkbox" name="cookies" as={Checkbox} value="Chocolate Chips" />Chocolate Chips<br/>
            <Field type="checkbox" name="cookies" as={Checkbox} value="Sneaker Doodle" />Sneaker Doodle<br/>
            <Field type="checkbox" name="cookies" as={Checkbox} value="Candy King" />Candy King<br/>

            <Button type="submit" variant="contained" disabled={isSubmitting}>Submit</Button><br/><br/>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
