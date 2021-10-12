import React, { useState, useEffect } from "react";
import "./Admin.scss";
import { Table, Modal, Button } from "react-bootstrap";
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

  //For Users
  const [userShow, setUserShow] = useState(false);
  const handleUserClose = () => setUserShow(false);
  const handleUserShow = () => setUserShow(true);

  useEffect(() => {
    console.log(allinstitutions.length);
  }, [allinstitutions]);

  const exampleData = {
    account_id: "259164b6-4f23-442a-b449-caf53712b41d",
    account_name: "Qas.aii1",
    created_at: "2021-10-11T15:33:44.558113Z",
    modified_at: "2021-10-11T15:33:44.558134Z",
    users: [
      {
        user_id: "555182fc-0a07-496a-bc8e-f75ffe81d4e8",
        first_name: "Frank",
        last_name: "Zylker",
        email_id: "zylker.frank@gmail.com",
        status: 0,
      },
      {
        user_id: "555182fc-0a07-496a-bc8e-f75ffe81d4e8",
        first_name: "Bruce",
        last_name: "Wayne",
        email_id: "bruce.wayne@wayneINC.com",
        status: 1,
      },
      {
        user_id: "555182fc-0a07-496a-bc8e-f75ffe81d4e8",
        first_name: "Tom",
        last_name: "Holland",
        email_id: "tom.holland@starkind.com",
        status: 0,
      },
    ],
  };

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
                {allinstitutions.map((institution, index) => {
                  return (
                    <tr key={Math.random()}>
                      <td>{index}</td>
                      <td>{institution.account_name}</td>
                      <td>{institution.owner_name}</td>
                      <td>{institution.email_id}</td>
                      <td>
                        <BsEye onClick={handleUserShow} />
                        <Modal
                          size="lg"
                          show={userShow}
                          onHide={handleUserClose}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Users in Institution: @UB</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div style={{marginBottom:"20px"}}>
                              <Button variant="secondary">Add User</Button>
                            </div>
                            <div>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Org Name</th>
                                    <th>Full Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {allinstitutions.map((institution, index) => {
                                    return (
                                      <tr key={Math.random()}>
                                        <td>{index}</td>
                                        <td>{institution.account_name}</td>
                                        <td>{institution.owner_name}</td>
                                        <td>{institution.owner_last_name}</td>
                                        <td>{institution.email_id}</td>
                                        <td>Onboard</td>
                                        <td>
                                          <BsEye onClick={handleUserShow} />
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </div>
                          </Modal.Body>
                        </Modal>
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
