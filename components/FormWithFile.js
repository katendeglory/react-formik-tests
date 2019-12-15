import React from "react";
import { Formik } from "formik";

const App = () => {

  const initValues = { file: null };
  
  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Formik initialValues={initValues} onSubmit={onSubmit}>
        {({ values, handleSubmit, setFieldValue }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                name="file"
                type="file"
                onChange={event => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />

              <button type="submit">submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
