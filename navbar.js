import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#ddd", padding: "10px" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/register" style={{ margin: "10px" }}>Register</Link>
      <Link to="/login" style={{ margin: "10px" }}>Login</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
      <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
