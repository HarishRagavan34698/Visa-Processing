import React from 'react';
import '../styles/ProjectDetails.css';

const ProjectDetails = ({ value, onChange, name = "project", required = true }) => {
  return (
    <div className="project-details">
      <label className="project-label">Project Details</label>
      <div className="project-input-container">
        <label className="project-sub-label">Project {required && '*'}</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="project-input"
          placeholder="Enter project name"
          required={required}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;