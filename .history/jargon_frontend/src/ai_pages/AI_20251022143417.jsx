import React, { useState } from 'react';
import './AI.css';
import UploadIcon from '../assets/Upload_Icon.svg';

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
      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">AI Translate & Lesson</h1>
        <div className='rocky-container'>

        </div>
        <div className="file-upload-container">
          <div className="file-upload-area">
            <img src={UploadIcon} alt="Upload" className="upload-icon" />
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
        <NavBar />
      </div>

    </div>
  );
};

export default AI;
