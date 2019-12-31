import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField,Button, FormControlLabel , Radio} from "@material-ui/core";

//CUSTOM INPUT ELEMENT & VALIDATION

const MyRadio = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return <FormControlLabel {...field} control={<Radio/>} label={label} />
}

const MyTextField = ({placeholder,...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return <TextField {...field} placeholder={placeholder} helperText={errorText} error={!!errorText} />
}

const MyForm2 = () => {

  const initValues = { webStack:"",firstName:"" };

  const submitForm = (values, actions) => {
    console.log(values);
    actions.resetForm({});
  };

  const validate = (values) => {
    const errors = {};
    if(values.firstName.includes('Pierre')) errors.firstName = "Pierre already Exists";
    return errors;
  }

  return (
    <div>
      <Formik initialValues={initValues} onSubmit={submitForm} validate={validate}>{
        formik => (
          <Form>
            <div>Web Stack:</div>
            <MyRadio type="radio" name="webStack" label="Front End" value="Front End"/><br/>
            <MyRadio type="radio" name="webStack" label="Back End" value="Back End"/><br/>
            <MyRadio type="radio" name="webStack" label="FullStack" value="FullStack"/><br/>

            <MyTextField type="text" name="firstName" placeholder="First Name" /><br/><br/>

            <Button type="submit" variant="contained">Submit</Button><br/><br/>
            <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </Form>
        )
      }</Formik>
    </div>
  );
};

export default MyForm2;