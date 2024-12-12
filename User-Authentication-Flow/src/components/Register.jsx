/* eslint-disable no-unused-vars */
import React from "react";

const Register = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Register</h2>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Username" required />
        <input style={styles.input} type="password" placeholder="Password" required />
        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  card: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    color: "#d32f2f",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#e64a19",
};

export default Register;
