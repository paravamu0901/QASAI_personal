import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const handleclick = () => {
    console.log(username, password);
  };

  return (
    <div className="mainLogin">
      <div className="leftSideLogin">
        <div className="loginHeading">
          <h1>QAS.AI</h1>
        </div>
        <div className="loginLogo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="rightSideLogin">
        <div className="componentLogin">
          <div className="componentLoginHeading">
            <h2>Login</h2>
          </div>
          <div className="componentDetails">
            <p className="enterDetails">
              Please enter your details to continue.
            </p>
          </div>
          <div className="componentUsername">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </div>
          <div className="componentPassword">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="componentTermsandconditions">
            <input style={{marginRight:"10px"}} type="checkbox" />I agree with the terms and conditions
          </div>
          <div className="componentSignin">
            <button onClick={handleclick}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
