import React from "react";
import { Form, Formik } from "formik";
import Resizer from "react-image-file-resizer";

const Test = () => {
  const iVal = {
    image: ""
  };

  const onSubmit = (values, actions) => {
    console.log(values.image);
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
        {formik => (
          <Form>
            <input
              name="image"
              type="file"
              onChange={e => {
                Resizer.imageFileResizer(
                  event.target.files[0],
                  500,
                  500,
                  "JPEG",
                  100,
                  0,
                  uri => {
                    uri.lastModifiedDate = new Date();
                    uri.fileName = "a-cool-danbo"
                    formik.setFieldValue("image", uri);
                  },
                  "blob"
                );
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
