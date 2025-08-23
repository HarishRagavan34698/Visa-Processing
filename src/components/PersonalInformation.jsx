import React from "react";
import "../styles/PersonalInformation.css";

export default function PersonalInformation({ form, handleChange }) {
  return (
    <fieldset>
      <legend>Personal Information</legend>

      {/* Row 1: Passport Number, Date of Issue, Date of Expiry */}
      <div className="inline three-cols">
        <div className="field-group">
          <label className="required">Passport Number</label>
          <input
            name="passportNumber"
            value={form.passportNumber}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Date of Issue</label>
          <input
            type="date"
            name="dateOfIssue"
            value={form.dateOfIssue}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Date of Expiry</label>
          <input
            type="date"
            name="dateOfExpiry"
            value={form.dateOfExpiry}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 2: Full Name, Date of Birth */}
      <div className="inline two-cols">
        <div className="field-group">
          <label className="required">Full Name (As in Passport)</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Current Address */}
      <div className="field-group">
        <label className="required">Current Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      {/* Row 3: State, Email Personal, Email Official */}
      <div className="inline three-cols">
        <div className="field-group">
          <label className="required">State / Province / Region</label>
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Email ID (Personal)</label>
          <input
            type="email"
            name="personalEmail"
            value={form.personalEmail}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Email ID (Official)</label>
          <input
            type="email"
            name="officialEmail"
            value={form.officialEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Row 4: Mobile Number, Office Number */}
      <div className="inline two-cols">
        <div className="field-group">
          <label className="required">Mobile Number</label>
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="required">Office Number (EXT no)</label>
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
