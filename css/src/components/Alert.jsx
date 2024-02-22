import React from "react";
import './Alert.css';

export default function Alert() {
  return (
    <div className="custom-alert">
      <strong className="alert-title">Alert! </strong>
      <span className="alert-text">This is awesome!</span>
    </div>
  );
}