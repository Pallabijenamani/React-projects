/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/dashboard");
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>User  Login</h1>
      <button style={styles.button} onClick={handleLogin}>
        Login 
      </button>
      <p style={styles.link} onClick={() => navigate("/register")}>
        Don’t have an account? <span style={styles.highlight}>Register</span>
      </p>
    </div>
  );
};

const styles = {
  card: {
    textAlign: "center",
    padding: "160px",
    borderRadius: "50px",
    backgroundColor: "#ffffff",
    boxShadow: "0 14px 28px rgba(0, 0, 0, 0.2)",
  },
  title: {
    color: "#00000b",
  },
  button: {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  },
  highlight: {
    fontWeight: "bold",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#388e3c",
};

export default Login;
