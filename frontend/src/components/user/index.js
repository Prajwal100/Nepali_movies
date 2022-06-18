import React, { useState, useEffect } from "react";
import { Row, Container, Table, Col, Button, Badge } from "react-bootstrap";
import { Route } from "react-router-dom";
import Create from "./create";
import axios from "axios";
const Index = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/users`).then((response) => {
      setUsers(response.data.user);
    });
  });

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>User Management</h1>
        </Col>
        <Col xs={12}>
          <Route to="/create" element={<Create />}>
            <Button variant="primary">Create User</Button>
          </Route>
        </Col>
        <Col xs={12} className="pt-5">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>1</td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      <Badge bg={data.gender == "male" ? "dark" : "secondary"}>
                        {data.gender}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="outline-info">Edit</Button>{" "}
                      <Button variant="outline-danger">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
