import React from "react";
import { Formik, Form, useField } from "formik";
import { Button, FormControlLabel , Radio} from "@material-ui/core";

const MyRadio = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return <FormControlLabel {...field} control={<Radio/>} label={label} />
}

const MyForm2 = () => {

  const initValues = { webStack:"" };

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
            <MyRadio type="radio" name="webStack" label="Front End" value="Front End"/><br/>
            <MyRadio type="radio" name="webStack" label="Back End" value="Back End"/><br/>
            <MyRadio type="radio" name="webStack" label="FullStack" value="FullStack"/><br/>

            <Button type="submit" variant="contained">Submit</Button><br/><br/>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </Form>
        )
      }</Formik>
    </div>
  );
};

export default MyForm2;