import React from "react";
import { Form, Formik } from "formik";
import Resizer from "react-image-file-resizer";

const Test = () => {
  const iVal = {
    image: ""
  };

  const onSubmit = (values, actions) => {
    console.log(values.image.size / (1024 * 1024) + "MB");
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
                Resizer.imageFileResizer(
                  event.target.files[0],
                  500,
                  500,
                  "JPEG",
                  100,
                  0,
                  uri => {
                    console.log(uri);
                  },
                  "base64"
                );
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
