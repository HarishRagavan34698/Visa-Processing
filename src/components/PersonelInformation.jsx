import React from "react";
import "../styles/PersonalInformation.css"

export default function PersonalInformation({ form, handleChange }) {
  return (
    <fieldset>
      <legend>Personal Information</legend>

      <div className="field-group">
        <label>Passport Number</label>
        <input
          name="passportNumber"
          value={form.passportNumber}
          onChange={handleChange}
        />
      </div>

      <div className="inline">
        <div className="field-group">
          <label>Date of Issue</label>
          <input
            type="date"
            name="dateOfIssue"
            value={form.dateOfIssue}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Date of Expiry</label>
          <input
            type="date"
            name="dateOfExpiry"
            value={form.dateOfExpiry}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field-group">
        <label>Full Name (As in Passport)</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label>Current Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label>State / Province / Region</label>
        <input
          name="state"
          value={form.state}
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label>Email ID (Personal)</label>
        <input
          type="email"
          name="personalEmail"
          value={form.personalEmail}
          onChange={handleChange}
        />
      </div>

      <div className="field-group">
        <label>Email ID (Official)</label>
        <input
          type="email"
          name="officialEmail"
          value={form.officialEmail}
          onChange={handleChange}
        />
      </div>

      <div className="inline">
        <div className="field-group">
          <label>Mobile Number</label>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label>Office Number (EXT no)</label>
          <input
            name="officeNumber"
            value={form.officeNumber}
            onChange={handleChange}
          />
        </div>
      </div>
    </fieldset>
  );
}
