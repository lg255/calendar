import React, { useContext } from 'react';
import CalendarContext from './../../context/calendar-context';

const Modal: React.FunctionComponent = (props) => {
  const { modalOptions, setModalOptions } = useContext(CalendarContext);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalOptions({ ...modalOptions, open: false, content: null });
  };

  return (
    <>
      <div
        className="modal-container"
        style={{
          visibility: modalOptions.open ? 'visible' : 'hidden',
          opacity: modalOptions.open ? 1 : 0,
        }}
      >
        <div
          className="modal-bg"
          style={{ opacity: modalOptions.open ? 0.8 : 0 }}
          onClick={(e) => closeModal(e)}
        ></div>
        <div className="modal-content">
          {modalOptions.title && (
            <div className="modal-title">{modalOptions.title}</div>
          )}
          {modalOptions.content}
          <div className="modal-closer" onClick={(e) => closeModal(e)}>
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
