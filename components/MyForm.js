import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Checkbox , Radio} from "@material-ui/core";

const MyForm = () => {
  const initValues = { firstName: "", lastName: "", getEmails: true, cookies: [], webstack:"" };

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
            <Field type="checkbox" name="cookies" as={Checkbox} value="Candy King" />Candy King<br/><br/>

            <div>Web Stack:</div>
            <Field type="radio" name="webStack" as={Radio} value="Front End"/>Front End<br/>
            <Field type="radio" name="webStack" as={Radio} value="Back End"/>Back End<br/>
            <Field type="radio" name="webStack" as={Radio} value="FullStack"/>FullStack<br/>


            <Button type="submit" variant="contained" disabled={isSubmitting}>Submit</Button><br/><br/>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
