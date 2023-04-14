import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const { name, email, password, confirmedPassword } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.prevent();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUserAlt /> Register
        </h1>
        <p>Create an account</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {/* ConfirmedPassword */}
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmedPassword"
              name="confirmedPassword"
              value={confirmedPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
