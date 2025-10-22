import React, { useState } from 'react';
import './AI.css';

const AI = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="ai-page">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">19:02</div>
        <div className="status-icons">
          <div className="wifi-icon">📶</div>
          <div className="battery-icon">🔋</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">AI Translate & Lesson</h1>
        
        <div className="file-upload-container">
          <div className="file-upload-area">
            <div className="upload-icon">⬆️</div>
            <p className="upload-text">Upload your PDF file (max 50 MB)</p>
            <input
              type="file"
              id="file-input"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-input" className="choose-file-btn">
              Choose file
            </label>
            {selectedFile && (
              <p className="selected-file">Selected: {selectedFile.name}</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AI;
