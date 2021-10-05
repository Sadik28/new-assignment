import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const allServices = service.slice(0, 4);

  return (
    <div className="custom-grid mb-5">
      {allServices.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      <Link
        className="text-decoration-none fs-5 border text-white p-2 bg-secondary rounded-3"
        to="/service"
      >
        Click Here for more details
      </Link>
    </div>
  );
};

export default Home;
