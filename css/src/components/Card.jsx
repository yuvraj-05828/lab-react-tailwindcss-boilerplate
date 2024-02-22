import React from "react";
import './Card.css';

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src="https://kalvium.com/wp-content/uploads/2022/07/Logo-nav.png" alt="Sunset in the mountains" />
      <div className="card-content">
        <div className="card-title">Kalvium store</div>
        <p className="card-description">You have a new course!</p>
      </div>
    </div>
  );
}