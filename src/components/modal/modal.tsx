import React from 'react';

const Modal: React.FunctionComponent<{
  visible: boolean;
  setVisible: Function;
}> = (props) => {
  const { visible, setVisible } = props;

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <>
      <div
        className="modal-container"
        style={{
          visibility: visible ? 'visible' : 'hidden',
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className="modal-bg"
          style={{ opacity: visible ? 0.8 : 0 }}
          onClick={(e) => closeModal(e)}
        ></div>
        <div className="modal-content">
          {props.children}
          <div className="modal-closer" onClick={(e) => closeModal(e)}>
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
