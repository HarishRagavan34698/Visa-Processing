import React, { useState, useRef } from 'react';
import '../styles/VisaInformation.css';

const VisaInformation = () => {
  const [entries, setEntries] = useState('single');
  const [hasValidVisa, setHasValidVisa] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Form submitted successfully!');
  };

  // Format file size to readable format
  const formatFileSize = (bytes) => {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Format date to match the example
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '');
  };

  return (
    <div className="visa-container">
      <div className="visa-header">
        <h2>Visa Information (Korea Requirements)</h2>
      </div>
      
      <form className="visa-form" onSubmit={handleSubmit}>
        <div className="two-column">
          <div className="form-section">
            <h3>No of Entry</h3>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  value="single"
                  checked={entries === 'single'}
                  onChange={() => setEntries('single')}
                />
                <span className="radio-custom"></span>
                Single
              </label>
              
              <label className="radio-option">
                <input
                  type="radio"
                  value="multiple"
                  checked={entries === 'multiple'}
                  onChange={() => setEntries('multiple')}
                />
                <span className="radio-custom"></span>
                Multiple (years Validity)
              </label>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Are you Holding any Valid Visa</h3>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  value="yes"
                  checked={hasValidVisa === true}
                  onChange={() => setHasValidVisa(true)}
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              
              <label className="radio-option">
                <input
                  type="radio"
                  value="no"
                  checked={hasValidVisa === false}
                  onChange={() => setHasValidVisa(false)}
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3>Attachment</h3>
          <div className="file-upload">
            <p className="file-instructions">PDF format • Max. 3MB</p>
            
            {!selectedFile ? (
              <div className="file-input-container">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <div className="file-input-display">
                  <span className="file-input-text">Choose a File</span>
                  <div className="file-input-spacer"></div>
                  <button 
                    type="button" 
                    className="attach-button"
                    onClick={handleAttachClick}
                  >
                    Attach
                  </button>
                  <span className="file-format">PDF</span>
                </div>
              </div>
            ) : (
              <div className="file-preview">
                <div className="file-info">
                  <div className="file-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#E74C3C"/>
                    </svg>
                  </div>
                  <div className="file-details">
                    <span className="file-name">{selectedFile.name}</span>
                    <span className="file-meta">
                      {formatDate(selectedFile.lastModified)} • {formatFileSize(selectedFile.size)}
                    </span>
                  </div>
                  <button 
                    type="button" 
                    className="remove-file"
                    onClick={handleRemoveFile}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#95a5a6"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default VisaInformation;