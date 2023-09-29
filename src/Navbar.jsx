import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between p-6 font-bold shadow-lg shadow-orange-500/50">
      <div>
        <Link to="/">Logo</Link>
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
