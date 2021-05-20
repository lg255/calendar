import React, { useState } from 'react';
import AddAppointmentForm from './add-appointment-form';
import Modal from './modal/modal';

const AddAppointment: React.FunctionComponent<any> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="add-appointment"
      onClick={(e) => {
        setShowModal(true);
      }}
    >
      <div className="add-appointment-button">+</div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <AddAppointmentForm />
      </Modal>
    </div>
  );
};

export default AddAppointment;
