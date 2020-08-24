import React from 'react'
import TodoForm from "./Form"
import { Modal, Button } from 'react-bootstrap'
import "./modal.css"

export default function TodoModal({ show, handleShowModal, handleHideModal, saveDataRequest, isEdit, selectedData, updateDataRequest, formData }) {
  return (
    <Modal
      className="todo-modal"
      show={show}
      onHide={handleHideModal}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <TodoForm isEdit={isEdit} selectedData={selectedData} formData={formData} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHideModal}>Close</Button>
        <Button onClick={() => {
          if(isEdit) {
            updateDataRequest()
          } else {
            saveDataRequest()
          }
        }}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}
