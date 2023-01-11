import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Login
 */
export const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          marginTop: "10vh",
          padding: "50px",
          filter: "drop-shadow(5px 5px 5px lightgray)"
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
          }}
          onSubmit={() => {
            navigate("/");
          }}
        >
          <label
            style={{
              textAlign: "left",
              width: "100%",
              color: "gray"
            }}
            htmlFor="username"
          >
            Username
          </label>
          <input id="username" type="text"></input>
          <label
            style={{
              textAlign: "left",
              width: "100%",
              color: "gray"
            }}
            htmlFor="password"
          >
            Password
          </label>
          <input id="password" type="password"></input>
          <input
            style={{
              padding: "10px 15px 10px 15px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "red",
              color: "white"
            }}
            type="submit"
            value="Submit"
          ></input>
        </form>
      </div>
    </div>
  );
};
