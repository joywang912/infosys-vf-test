import React from "react";
import { Modal } from "react-bootstrap";

const PhotoModal = (props) => {
  const { showPhotoModal, setShowPhotoModal, photoSelected } = props;
  const handleClose = () => setShowPhotoModal(false);

  return (
    <Modal
      data-test="component-photo-modal"
      dialogClassName="photo-modal"
      show={showPhotoModal}
      onHide={handleClose}
    >
      <div className="photo-modal__body">
        <img src={photoSelected.url} alt={photoSelected.title} />
      </div>
    </Modal>
  );
};

export default PhotoModal;
