import React, { useState, useEffect } from "react";
import "./Admin.scss";
import { Table } from "react-bootstrap";
import CreateOrganisation from "../CreateOrganisation/CreateOrganisation";
import { BsEye } from "react-icons/bs";

const Admin = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [instiitutionName, setInstitutionName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [institutions, setInstitutions] = useState({});
  const [allinstitutions, setAllInstitutions] = useState([]);
  const date = new Date();

  let counter = 0;

  useEffect(() => {
    console.log(allinstitutions.length);
  }, [allinstitutions]);

  const handleSubmit = () => {
    let institutionObj = {};
    institutionObj["account_id"] = `${Math.random()}`;
    institutionObj["account_name"] = instiitutionName;
    institutionObj["owner_name"] = firstName;
    institutionObj["owner_last_name"] = lastName;
    institutionObj["email_id"] = email;
    institutionObj["created_on"] = `${date.getDate()}+${date.getTime()}`;
    institutionObj["modified_on"] = `${date.getDate()}+${date.getTime()}`;
    setInstitutions(institutionObj);
    allinstitutions.push(institutionObj);
    setAllInstitutions(allinstitutions);
    handleClose();
    console.log(allinstitutions.length);
  };

  return (
    <div className="Admin">
      {allinstitutions.length > 0 ? (
        <div>
          <div className="AdminHeader">
            <div>
              <h2>Institutions</h2>
            </div>
            <div>
              <CreateOrganisation
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
                setInstitutionName={setInstitutionName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <div className="tableComponent">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Org Name</th>
                  <th>Owner Name</th>
                  <th>Email ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allinstitutions.map((institution) => {
                  return (
                    <tr key={Math.random()}>
                      <td>{counter++}</td>
                      <td>{institution.account_name}</td>
                      <td>{institution.owner_name}</td>
                      <td>{institution.email_id}</td>
                      <td>
                        <BsEye />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div>
          <div className="WelcomeText">
            Hi Bruce, Looks like you dont have any organisations
          </div>
          <CreateOrganisation
            handleShow={handleShow}
            show={show}
            handleClose={handleClose}
            setInstitutionName={setInstitutionName}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Admin;

{
  /* <div className="CreateOrganisation">
        <button onClick={handleShow}>Create Organisation</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Institution Name</Form.Label>
              <Form.Control
                onChange={(e) => setInstitutionName(e.target.value)}
                type="text"
                placeholder="Enter institution name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter owner's first name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter owner's last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter owner's email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal> */
}
