import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

/**
 * Header
 */
export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="header-content">
        <span
          id="header-title"
          onClick={() => {
            navigate("/");
          }}
        >
          JAPAN AIRLINES
        </span>
        <button
          className="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
};
