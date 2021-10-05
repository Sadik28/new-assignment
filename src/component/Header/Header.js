import React from "react";
import { Nav, NavItem, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-info text-dark bg-opacity-10">
      <Nav
        className="bg-secondary bg-opacity-50 p-2"
        fill
        variant="tabs"
        defaultActiveKey="/home"
      >
        <NavItem>
          <NavLink className="text-decoration-none text-dark fs-5" to="/home">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="text-decoration-none text-dark fs-5"
            to="/service"
          >
            Service
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-decoration-none text-dark fs-5" to="/review">
            Review
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-decoration-none text-dark fs-5" to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="text-decoration-none text-dark fs-5"
            to="/notfound"
          >
            Scholarship
          </NavLink>
        </NavItem>
      </Nav>

      <h1 className="mt-3 fw-bold text-info">
        Institute Of Engineering Academic
      </h1>
      <div className="d-flex m-3 md-5 p-3">
        <Image src="https://i.pinimg.com/550x/9d/e5/1a/9de51a58b1bd469b6a411aef457d1155.jpg" />
        <div className="mx-auto">
          <h4 className="m-4">Quality service at affordable fees</h4>
          <p>
            We ensure that our service always best. And our representative{" "}
            <br /> are educated and they always satisfied you, to give our
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
