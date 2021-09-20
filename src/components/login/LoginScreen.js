import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useForm } from "../../Hooks/useForm";
import useAuth from "../../Hooks/useAuth";

const LoginScreen = () => {
  const auth = useAuth();
  const history = useHistory();

  const [state, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    auth.Login({ email, password });

    auth.isLogged() && history.push("/home");
  };
  return (
    <div className="bg1 page">
      <header className="header">
        <h1 className="logo">AlkemyChallenge</h1>
        <nav>
          <Link className="btn btn-outline-primary" to="/register">
            Register
          </Link>
        </nav>
      </header>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
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
              onChange={handleInputChange}
            />
          </div>

          <button className="btn btn-primary  mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
