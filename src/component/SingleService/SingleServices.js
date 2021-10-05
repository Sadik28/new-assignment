import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const SingleServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="custom-grid mb-5">
      {services.map((service) => (
        <Service service={service}></Service>
      ))}
    </div>
  );
};

export default SingleServices;
