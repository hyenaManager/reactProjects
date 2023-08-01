import { useEffect, useState } from "react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Login({ userDatas, isLogin, changeNav }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  useEffect(() => changeNav("/settting"));

  function onRegister() {
    navigate("/setting/login/register");
  }
  function loginValidator() {
    let boolean = null;
    userDatas.forEach((data) => {
      if (data.user_name === userName) {
        boolean = data.password === password;
      }
    });
    return boolean;
  }

  function handleLogin() {
    let isValid = loginValidator();
    if (isValid) {
      navigate("/");
      isLogin(userName);
    } else {
      setLoginStatus("Your username or password is incorrect!!");
    }
  }
  return (
    <>
      <div
        className="container p-3 mt-4 shadow-lg rounded"
        style={{ maxWidth: "500px" }}
      >
        <label>User name</label>
        <input
          value={userName}
          className="form-control"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          value={password}
          type="password"
          className="form-control"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-outline-success mt-2" onClick={handleLogin}>
          login
        </button>
        <br />
        <i>
          still haven't account{" "}
          <a onClick={onRegister} style={{ color: "blue", cursor: "pointer" }}>
            register here
          </a>
        </i>
        <span className="text-danger">{loginStatus}</span>
      </div>
    </>
  );
}
