import React, { useState, useEffect } from "react";
import "./Admin.scss";
import { Table, Modal, Button } from "react-bootstrap";
import CreateOrganisation from "../CreateOrganisation/CreateOrganisation";
import { BsEye } from "react-icons/bs";
import { userAtom } from '../../_state';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import Cookies from 'js-cookie'

const Admin = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [institutionName, setInstitutionName] = useState("");
    const [users, setUsers] = useState([]);
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

    const user = useRecoilValue(userAtom);

    useEffect(() => {
        axios.get('/api/admin/accounts').then((response) => {
            if(response && response.status === 200 && response.data) {
                setAllInstitutions(response.data);
                handleClose();
            }
        });
    }, []);


    const handleSubmit = () => {
        console.log(Cookies.get('csrftoken'));
        const headers = {
            'X-CSRFToken': Cookies.get('csrftoken'),
        };
        let institutionJSON = {};
        institutionJSON["institution_name"] = institutionName;
        institutionJSON["first_name"] = firstName;
        institutionJSON["last_name"] = lastName;
        institutionJSON["email_id"] = email;

        return axios.post('/api/admin/accounts', institutionJSON, {headers: headers}).then((response) => {
            if(response && response.status === 200 && response.data) {
                setInstitutions(institutionJSON);
                allinstitutions.push(institutionJSON);
                setAllInstitutions(allinstitutions);
                handleClose();
            }
        });
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
                    <tr key={institution.account_id}>
                      <td>{index + 1}</td>
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
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users.map((user, index) => {
                                    return (
                                      <tr key={Math.random()}>
                                        <td>{index}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email_id}</td>
                                        <td>{user.status}</td>
                                        <td>
                                          <BsEye />
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
            Hi {user.first_name}, Looks like you dont have any organisations
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
