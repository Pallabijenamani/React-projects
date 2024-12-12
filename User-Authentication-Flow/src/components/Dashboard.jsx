/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Dashboard = ({ onLogout }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Welcome to the Dashboard!</h2>
      <button style={styles.button} onClick={onLogout}>
        Logout!!
      </button>
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
    color: "#3f51b5",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#1976d2",
};

export default Dashboard;
