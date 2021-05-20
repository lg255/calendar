import React, { useContext, useState } from 'react';
import EditIcon from '../../svg-icons/edit-icon';
import CalendarContext from '../../context/calendar-context';
import Modal from '../modal/modal';
import ViewAppointments from './view-appointments/view-appointments';

const ViewAppointmentsButton: React.FunctionComponent<{
  canOpenAppointmentsModal: boolean;
}> = (props) => {
  const { canOpenAppointmentsModal } = props;
  const { selectedDay } = useContext(CalendarContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="view-appointments-button"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      >
        {EditIcon}
      </div>
      {canOpenAppointmentsModal ? (
        <Modal visible={showModal} setVisible={setShowModal}>
          <ViewAppointments selectedDay={selectedDay} />
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewAppointmentsButton;
