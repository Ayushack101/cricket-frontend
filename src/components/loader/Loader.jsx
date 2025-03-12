import React from "react";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ height: "100vh" }}
    >
      <div
        className="spinner-border"
        style={{
          fontSize: "25px",
          height: "50px",
          width: "50px",
          color: "#ff5500",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
