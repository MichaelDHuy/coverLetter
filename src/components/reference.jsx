import React from "react";
import "./reference.css"; // Create this CSS file

const Reference = () => {
  return (
    <section className="reference-container">
      <div className="reference-content">
        <h2>References</h2>
        <div className="reference-list">
          <div className="reference-item">
            <h3>Andrew Isenor</h3>
            <p>Position: Site Manager, <i><strong>Cermaq Canada</strong></i></p>
            <p>Email: andrew.isenor@cermaq.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="reference-item">
            <h3>Derek Pelizzari</h3>
            <p>Position: Managing Director, <i><strong>Kika Communications & Marketing</strong></i></p>
            <p>Email: derek@kika.ca</p>
            <p>Phone: (987) 654-3210</p>
          </div>
          {/* Add more reference items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Reference;