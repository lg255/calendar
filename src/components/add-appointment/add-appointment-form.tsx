import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { firestore } from '../../Firebase';
import { UserContext } from '../../context/user-provider';

interface AppointmentFormValues {
  description: string;
  type: string;
  date: string;
}

const AddAppointmentForm: React.FunctionComponent = () => {
  const { currentUser } = useContext(UserContext);

  const saveAppointment = (values: AppointmentFormValues) => {
    firestore.collection('Appointments').add({
      description: values.description,
      type: 'reminder',
      date: new Date(values.date),
      userId: currentUser?.userId,
    });
  };

  const submitFn = (
    values: AppointmentFormValues,
    { setSubmitting }: { setSubmitting: (val: boolean) => void }
  ) => {
    saveAppointment(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          description: '',
          date: '',
          type: 'reminder',
        }}
        validationSchema={Yup.object({
          description: Yup.string().required('Bitte ausfüllen.'),
          date: Yup.date().required('Required'),
        })}
        onSubmit={submitFn}
      >
        <Form>
          <div className="row">
            <div className="form-label">
              <label htmlFor="description">Titel</label>
            </div>
            <div className="form-input">
              <Field name="description" id="description" type="text" />
            </div>
            <div className="form-error">
              <ErrorMessage name="description" className="form-error" />
            </div>
          </div>
          <div className="row">
            <div className="form-label">
              <label htmlFor="date">Datum</label>
            </div>
            <div className="form-input">
              <Field name="date" id="date" type="date" />
            </div>
            <div className="form-error">
              <ErrorMessage name="date" />
            </div>
          </div>
          <div className="row">
            <button type="submit">Speichern</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAppointmentForm;
