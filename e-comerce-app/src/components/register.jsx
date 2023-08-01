import { useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Register({ userDatas, createUser, changeNav }) {
  const [userName, setUserName] = useState("");

  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorLogs, setErrorLogs] = useState({
    name: null,
    password: null,
    password_length: null,
    phone_number: null,
  });
  const [validToSubmit, setValidToSubmit] = useState(false);
  const navigate = useNavigate();
  //define passwordRef
  useEffect(() => changeNav("setting"));
  function passwordSet(value) {
    passwordRef.current = value;
  }
  function confirmPasswordset(value) {
    confirmPasswordRef.current = value;
  }
  useEffect(() => {
    if (
      errorLogs.name === null &&
      errorLogs.password === null &&
      errorLogs.phone_number === null
    ) {
      setValidToSubmit(true);
    } else {
      setValidToSubmit(false);
    }
  }, [errorLogs]);

  function valid_phoneNum(value) {
    const isNaNExist = value
      .split("")
      .find((char) => isNaN(parseInt(char)) === true); //checking if NaN is exist? if doesnt exist it should return undefined
    const errorContext =
      isNaNExist !== undefined ? "enter only digit number" : null; //if isNumeric is not equal to undefined run error log
    setErrorLogs((errorLogs) => ({
      ...errorLogs,
      phone_number: errorContext,
    }));
  }
  function valid_passwordMatch(value, boolean) {
    const lengthError =
      passwordRef.current.split("").length > 7
        ? null
        : "Enter at least 8 characters long";
    const errorContext =
      (boolean
        ? confirmPasswordRef.current.toLowerCase()
        : passwordRef.current.toLowerCase()) === value.toLowerCase()
        ? lengthError
        : "Passwords do not match";
    setErrorLogs((errorLogs) => ({
      ...errorLogs,
      password: errorContext,
    }));
  }
  function valid_name(value) {
    const errorContext =
      userDatas.find((user) => user.user_name === value) !== undefined
        ? "Username is already taken"
        : null;
    setErrorLogs((errorLogs) => ({
      ...errorLogs,
      name: errorContext,
    }));
  }

  function handleRegister() {
    navigate("/");
    createUser({
      user_name: userName,
      email: email,
      password: passwordRef.current,
      address: address,
      phone_number: phoneNumber,
    });
  }

  return (
    <>
      <form
        className="registerDiv container p-1 mt-0 shadow-lg rounded"
        style={{ maxWidth: "500px" }}
      >
        <label>User name</label>
        <input
          value={userName}
          className="form-control"
          placeholder="user name"
          onChange={(e) => {
            setUserName(e.target.value);
            valid_name(e.target.value);
          }}
          required
        />
        {errorLogs.name !== null && (
          <>
            <i style={{ color: "red" }}>{errorLogs.name}</i>
            <br />
          </>
        )}
        <label>Email</label>
        <input
          value={email}
          className="form-control"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Address</label>
        <textarea
          value={address}
          className="form-control"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label>Phone number</label>
        <input
          value={phoneNumber}
          className="form-control"
          placeholder="phone number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            valid_phoneNum(e.target.value);
          }}
          required
        />
        <i>{errorLogs.phone_number}</i>
        <br />
        <label>Password</label>
        <input
          value={passwordRef.current}
          type="password"
          className="form-control"
          placeholder="at least 8 characters password"
          onChange={(e) => {
            passwordSet(e.target.value);
            valid_passwordMatch(e.target.value, true);
          }}
          pattern=".{8,}"
          required
        />
        <i>{errorLogs.password}</i>
        <br />
        <label>Confirm password</label>
        <input
          type="password"
          value={confirmPasswordRef.current}
          className="form-control"
          placeholder="confirm password"
          onChange={(e) => {
            confirmPasswordset(e.target.value);
            valid_passwordMatch(e.target.value, false);
          }}
          required
        />
        <button
          className={
            "btn btn-outline-success mt-2 " +
            (validToSubmit && confirmPasswordRef.current !== ""
              ? null
              : "disabled")
          }
          onClick={handleRegister}
          type="submit"
        >
          register
        </button>
        <br />
      </form>
    </>
  );
}
