import { ScissorOutlined } from "@ant-design/icons";
import { AlignRightOutlined } from "@ant-design/icons/lib/icons";
import { Badge } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BTN from "../common/Buttons/Button";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routeData = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/services",
      name: "Services",
    },
    {
      to: "/products",
      name: "Products",
    },
    {
      to: "/about",
      name: "About",
    },
    {
      to: "/contact",
      name: "Contact",
    },
    {
      to: "/style",
      name: "Style",
    },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Brand Name
      </NavLink>
      <div onClick={handleClick} className="nav-icon">
        {open ? <ScissorOutlined /> : <AlignRightOutlined />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        {routeData.map((item, index) => {
          const { to, name } = item;
          return (
            <li className="nav-item " key={index}>
              <NavLink
                to={`${to}`}
                activeclassname="active"
                className="nav-link"
                onClick={closeMenu}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
        <li className="nav-item btns">
          <NavLink onClick={closeMenu} to="/register">
            <BTN text="Sign Up" btnclass="nav-btn" />
          </NavLink>
          <NavLink onClick={closeMenu} to="/login">
            <Badge count={count}>
              <BTN text="Login" btnclass="nav-btn" />
            </Badge>
          </NavLink>
        </li>
        {/* <li className="nav-item ">
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
