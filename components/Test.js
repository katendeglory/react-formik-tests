import React from "react";

import { Form, Formik } from "formik";

const Test = () => {
  const iVal = {
    image: ""
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  let validate = values => {
    const errors = {};
    //field validation occurs here...
    return errors;
  };

  return (
    <div className="">
      <Formik initialValues={iVal} onSubmit={onSubmit} validate={validate}>
        {({ values, setFieldValue }) => (
          <Form>
            <input
              name="image"
              type="file"
              onChange={e => {
                console.log(e.target);
                setFieldValue("image", e.currentTarget.files[0]);
              }}
            />
            <br />
            <br />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Test;
