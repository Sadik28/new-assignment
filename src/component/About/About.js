import React from "react";
import { Table } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <div className="bg-secondary bg-opacity-25 p-3 mb-5">
        <h4>Institute Of Engineering Academic</h4>
        <h6>One better solution of different type of educational program.</h6>
        <p>
          We give different type of service. We provide 24/7 support for a
          student.
        </p>
      </div>
      <Table striped bordered hove className="mb-5">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Courses Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>Software Engineering</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Civil Engineering</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Electrical Engineering</td>
          </tr>
          <tr>
            <td>4 </td>
            <td> Information Engineering </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Robotics Engineering</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nuclear Engineering</td>
          </tr>
          <tr>
            <td>7</td>
            <td>BIO Engineering</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Computer and Science Engineering</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default About;
