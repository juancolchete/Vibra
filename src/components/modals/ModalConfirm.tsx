"use client";
import { Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "../buttons/Button";
import { useState } from "react";
import Text from "../fonts/Text";

function ModalConfirm() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function loadingBtn() {
    setLoading(true);
    handleShow();
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 1000);
  }
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "initial",
        backdropFilter: "blur(5px)",
      }}
    >
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <Text size="0.675rem" color="##fcfcfc66" center>
            to this wallet
          </Text>
        </Modal.Body>

        <Modal.Footer>
          {loading ? (
            <Button className="btnBlue" onClick={loadingBtn} disabled>
              <Spinner animation="border" size="sm" variant="light" />
            </Button>
          ) : (
            <Button className="btnBlue" onClick={loadingBtn}>
              Confirm Transaction
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalConfirm;
