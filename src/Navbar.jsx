import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-10 font-bold shadow-lg shadow-orange-500/50">
      <div>
        <Link to="/">
          <img
            src={logo}
            width={80}
          />
        </Link>
      </div>
      <div>
        <ul className="w-full flex gap-5">
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>{/* <Link to="/contact">Contact Me</Link> */}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
