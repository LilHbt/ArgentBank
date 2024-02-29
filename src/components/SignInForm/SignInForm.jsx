import React, { useState } from "react";
import "./SignInForm.scss";

import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };
  const signIn = (e) => {
    e.preventDefault();
    let body = { email, password };
    signInUser(body, isChecked, dispatch);
    routeChange();
  };

  return (
    <div className="container-form">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form className="sign-in-form" onSubmit={signIn}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
        />

        <div className="check">
          <input
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="submit-button" type="submit">
          Sign In
        </button>
      </form>
      <Link to={"/SignUp"}>Sign Up</Link>
    </div>
  );
};

export default SignInForm;
