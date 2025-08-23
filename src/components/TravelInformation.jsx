import React from 'react';
import "../styles/TravelInformation.css";

export default function TravelInformation({ form, handleChange }) {
  return (
    <div className="travel-info">
      <h3>Travel Information</h3>
      
      {/* First row: Place to Travel and Purpose of Travel */}
      <div className="travel-fields-row">
        <div className="travel-field-group">
          <label>
            Place to Travel <span className="required-asterisk">*</span>
            <input 
              type="text" 
              name="placeToTravel" 
              value={form.placeToTravel} 
              onChange={handleChange} 
              placeholder="United State (Zone B)"
            />
          </label>
        </div>
        
        <div className="travel-field-group">
          <label>
            Purpose of Travel <span className="required-asterisk">*</span>
            <input 
              type="text" 
              name="purpose" 
              value={form.purpose} 
              onChange={handleChange} 
              placeholder="XXX-XXX-XX-X"
            />
          </label>
        </div>
      </div>

      {/* Second row: From and To dates */}
      <div className="travel-fields-row">
        <div className="travel-field-group">
          <label>
            From <span className="required-asterisk">*</span>
            <input 
              type="date" 
              name="travelFrom" 
              value={form.travelFrom} 
              onChange={handleChange} 
            />
          </label>
        </div>
        
        <div className="travel-field-group">
          <label>
            To <span className="required-asterisk">*</span>
            <input 
              type="date" 
              name="travelTo" 
              value={form.travelTo} 
              onChange={handleChange} 
            />
          </label>
        </div>
      </div>

    </div>
  );
}