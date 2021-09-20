import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useForm } from "./../../Hooks/useForm";
import useAuth from "./../../Hooks/useAuth";

function RegisterScreen() {
  const auth = useAuth();
  const history = useHistory();

  const [state, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = state;

    auth.Register({ name, email, password });

    auth.isLogged() && history.push("/home");
  };
  return (
    <div className="bg1 page">
      <header className="header">
        <h1 className="logo">AlkemyChallenge</h1>
        <nav>
          <Link className="btn btn-outline-primary" to="/login">
            Login
          </Link>
        </nav>
      </header>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-3"
              value={name}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              value={email}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              value={password}
              required
              minLength={8}
              onChange={handleInputChange}
            />
          </div>

          <button className="btn btn-primary mt-4">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterScreen;
