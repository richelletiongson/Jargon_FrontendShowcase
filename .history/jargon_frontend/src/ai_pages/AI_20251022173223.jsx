import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AI.css';
import UploadIcon from '../assets/Upload_Icon.svg';
import RockyImage from '../assets/AI_Rocky.PNG';
import JargonWordmark from '../assets/Jargon_Wordmark.png';

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
      <div className="main-content">
        <div className="wordmark-container">
          <img src={JargonWordmark} alt="Jargon" className="jargon-wordmark" />
        </div>
        <h1 className="page-title">AI Translate & Lesson</h1>
        <div className='rocky-container'>
          <img src={RockyImage} alt="Rocky" className="rocky-image" />
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
        <div className="flashcard-link">
          <Link to="/flashcards" className="flashcard-btn">
            View Flashcards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AI;