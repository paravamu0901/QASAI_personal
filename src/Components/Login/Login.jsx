import React, { useEffect, useState } from "react";
import logo from "../../Images/logo.png";
import { useHistory } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, isCheckedvalue] = useState(false);
  // const [loggedin, isloggedin] = useState(false);
  const History = useHistory();

  useEffect(() => {
    console.log(username, password, checked);
  }, [username, password, checked]);

  const handleclick = () => {
    let val = true;
    console.log(username, password, checked);
    if (username === "") {
      alert("Please provide a username or email");
      val = false;
    } else if (password === "") {
      alert("Please provide a valid password");
      val = false;
    } else if (checked === false) {
      alert("Please accept the terms and conditions");
      val = false;
    }
    if (val === true) {
      // isloggedin(true);
      History.push("/dashboard");
    }
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
              placeholder="  Enter Username"
            />
          </div>
          <div className="componentPassword">
            <input
              type="password"
              placeholder="  Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="componentTermsandconditions">
            <input
              style={{ marginRight: "10px" }}
              onClick={(e) => isCheckedvalue(!checked)}
              type="checkbox"
            />
            I agree with the terms and conditions
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
