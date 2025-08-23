import React from 'react';
import '../styles/InitiationType.css'; // We'll create this CSS file

const InitiationType = ({ value, onChange, name = "initiationType" }) => {
  return (
    <div className="initiation-type">
      <label className="initiation-label">Initiation Type</label>
      <div className="initiation-options">
        <label className="initiation-option">
          <input
            type="radio"
            name={name}
            value="me"
            checked={value === "me"}
            onChange={onChange}
            className="initiation-input"
          />
          <span className="initiation-custom-radio"></span>
          <span className="initiation-text">For Me</span>
        </label>
        <label className="initiation-option">
          <input
            type="radio"
            name={name}
            value="reportee"
            checked={value === "reportee"}
            onChange={onChange}
            className="initiation-input"
          />
          <span className="initiation-custom-radio"></span>
          <span className="initiation-text">For My Reportee</span>
        </label>
      </div>
    </div>
  );
};

export default InitiationType;