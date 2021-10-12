import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './CreateOrganisation.scss'

const CreateOrganisation = (props) => {
  return (
    <div>
      <div className="CreateOrganisation">
        <button onClick={props.handleShow}>Create Organisation</button>
      </div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Institution</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Institution Name</Form.Label>
              <Form.Control
                onChange={(e) => props.setInstitutionName(e.target.value)}
                type="text"
                placeholder="Enter institution name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => props.setFirstName(e.target.value)}
                type="text"
                placeholder="Enter owner's first name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => props.setLastName(e.target.value)}
                type="text"
                placeholder="Enter owner's last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => props.setEmail(e.target.value)}
                type="email"
                placeholder="Enter owner's email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={props.handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateOrganisation;
