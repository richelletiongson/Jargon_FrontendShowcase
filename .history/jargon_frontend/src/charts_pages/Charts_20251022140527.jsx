import React from 'react';
import './Charts.css';

const Charts = () => {
  return (
    <div className="charts-page">
      <div className="status-bar">
        <div className="time">19:02</div>
        <div className="status-icons">
          <div className="wifi-icon">📶</div>
          <div className="battery-icon">🔋</div>
        </div>
      </div>
      
      <div className="main-content">
        <h1 className="page-title">Charts</h1>
        <p className="coming-soon">Coming Soon...</p>
      </div>
    </div>
  );
};

export default Charts;
