import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = (props) => {
  const { img, name, about, price } = props.service;
  return (
    <Card className="h-100">
      <img src={img} alt="" />
      <br />
      <h3>{name}</h3>
      <br />
      <h5> {about}</h5>
      <h5>Tuition: ${price}</h5>
      <Button className="m-5 p-2 w-75">Apply Here</Button>
    </Card>
  );
};

export default Service;
