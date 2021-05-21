import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddAppointmentForm: React.FunctionComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          description: '',
          date: '',
        }}
        validationSchema={Yup.object({
          description: Yup.string().required('Bitte ausfüllen.'),
          date: Yup.date().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="description">Titel</label>
          <Field name="description" id="description" type="text" />
          <ErrorMessage name="description" />
          <br />
          <label htmlFor="date">Datum</label>
          <Field name="date" id="date" type="date" />
          <ErrorMessage name="date" />
          <br />
          <button type="submit">Speichern</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAppointmentForm;
