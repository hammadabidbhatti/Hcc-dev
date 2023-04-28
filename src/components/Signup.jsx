import React, { useState } from "react";
import "../App.css";
import Logo from "../assets/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSignIn = () => {
    // const navigate = useNavigate();
    axios
      .post("https://644912bcb88a78a8f0fc7e1d.mockapi.io/loginData", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
      });
    // navigate("/Login");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email");
    // setEmail(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("Password");
    // setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="main">
      <img className="Logo" src={Logo} alt="Logo" />
      <div className="card">
        <form onSubmit={handleSubmit}>
          <br />
          <p className="SignIn">Sign in to your account</p>
          <br />
          <br />
          <label className="required">
            Email
            <span style={{ color: "rgb(34, 100, 230)", paddingLeft: "4px" }}>
              *
            </span>
          </label>
          <input
            className="RequiredInput"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <label className="required">
            Password
            <span style={{ color: "rgb(34, 100, 230)", paddingLeft: "4px" }}>
              *
            </span>
          </label>
          <input
            className="RequiredInput"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          >
            {/* <FaRegEye /> */}
          </input>
          {/* <FaRegEye onClick={togglePassword}>Show Password</FaRegEye> */}
          <p className="ForgetPassword">
            <a className="ForgetPassword_a_tag" href="#">
              Forget password?
            </a>
          </p>
          <br />
          <button onClick={handleSignIn} type="submit">
            Login
          </button>
          {loggedIn && <div>Shhh!</div>}
        </form>
      </div>
    </div>
  );
}
export default Signup;
