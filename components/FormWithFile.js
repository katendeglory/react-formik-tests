import React from "react";
import { Formik } from "formik";

const App = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ file: null }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
        }}
      >
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
