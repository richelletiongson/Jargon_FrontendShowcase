import React from 'react';
import './Course.css';

const Course = () => {
  return (
    <div className="course-page">
      <div className="status-bar">
        <div className="time">19:02</div>
        <div className="status-icons">
          <div className="wifi-icon">📶</div>
          <div className="battery-icon">🔋</div>
        </div>
      </div>
      
      <div className="main-content">
        <h1 className="page-title">Course</h1>
        <p className="coming-soon">Coming Soon...</p>
      </div>
    </div>
  );
};

export default Course;
