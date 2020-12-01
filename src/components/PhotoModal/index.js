import React from "react";
import { Modal } from "react-bootstrap";

const PhotoModal = (props) => {
  const { showPhotoModal, setShowPhotoModal, photoSelected } = props;
  const handleClose = () => setShowPhotoModal(false);

  return (
    <Modal
      data-test="component-photo-modal"
      show={showPhotoModal}
      onHide={handleClose}
    >
      <Modal.Body>
        <img src={photoSelected.url} alt={photoSelected.title} />
      </Modal.Body>
    </Modal>
  );
};

export default PhotoModal;
