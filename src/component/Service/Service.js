import React from "react";
import { Card } from "react-bootstrap";

const Service = (props) => {
  const { img, name, details, price } = props.service;
  return (
    <Card>
      <img src={img} alt="" />
      <h5>Service Name: {name}</h5>
      <h5>Service Details: {details}</h5>
      <h5>Price : ${price}</h5>
    </Card>
  );
};

export default Service;
