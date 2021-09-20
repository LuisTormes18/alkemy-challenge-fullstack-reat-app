import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

function Navbar(props) {
  const auth = useAuth();
  return (
    <header className="header">
      <h1 className="logo">AlkemyChallenge</h1>
      <nav className="navbar">
        <NavLink exact activeClassName="active" className="link" to="/home">
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="link"
          to="/home/egress"
        >
          Egress
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="link"
          to="/home/entry"
        >
          Entry
        </NavLink>
        <NavLink exact activeClassName="active" className="link" to="/home/new">
          New Recod
        </NavLink>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            auth.logout();
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
