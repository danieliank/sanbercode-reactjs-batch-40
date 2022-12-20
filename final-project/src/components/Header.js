/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
  <div className="flex-1">
  <Link to="/"><a className="btn btn-ghost normal-case text-xl">JobV</a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
</div>
    </>
  );
};

export default Header;
