import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
const Records = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.id} </td>
            <td>{item.title} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Records;
