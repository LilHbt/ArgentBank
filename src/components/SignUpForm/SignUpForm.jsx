import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/SignIn";
    navigate(path);
  };
  const signUp = (e) => {
    e.preventDefault();
    let body = { email, password, firstName, lastName, userName };
    signUpUser(body, dispatch);
    routeChange();
  };
  return (
    <div className="container-form">
      <form className="signUp-form" onSubmit={signUp}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
        />
        <label htmlFor="firstName">Firstname</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="given-name"
        />
        <label htmlFor="lastName">Lastname</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="family-name"
        />
        <label htmlFor="userName">Username</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="userName"
          id="userName"
          autoComplete="username"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
