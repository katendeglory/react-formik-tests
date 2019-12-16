import React from "react";
import { Formik, Form, Field, useField } from "formik";
import { Button, FormControlLabel , Radio} from "@material-ui/core";

const Radio = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return <FormControlLabel {...field} control={<Radio/>} label={label} />
}

const MyForm2 = () => {

  const initValues = { webstack:"" };

  const submitForm = (values, actions) => {
    console.log(values);
    actions.resetForm({});
  };

  return (
    <div>
      <Formik initialValues={initValues} onSubmit={submitForm}>{
        formik => (
          <Form>
            <div>Web Stack:</div>
            <Field type="radio" name="webStack" as={Radio} value="Front End"/>Front End<br/>
            <Field type="radio" name="webStack" as={Radio} value="Back End"/>Back End<br/>
            <Field type="radio" name="webStack" as={Radio} value="FullStack"/>FullStack<br/>

            <Button type="submit" variant="contained">Submit</Button><br/><br/>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </Form>
        )
      }</Formik>
    </div>
  );
};

export default MyForm2;