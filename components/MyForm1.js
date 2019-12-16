import React from "react";
import { Formik, Form } from "formik";

const MyForm1 = () => {
  const initValues = { file: null };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Formik initialValues={initValues} onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <input name="file" type="file" onChange={e => setFieldValue("file", e.currentTarget.files[0])}/>
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm1;