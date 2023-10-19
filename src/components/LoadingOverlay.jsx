import React from 'react';
import '../styles/LoadingOverlay.css';

function LoadingOverlay({ isLoading, message = "Loading..." }) {
    if (!isLoading) return null;

    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
            <p>{message}</p>
        </div>
    );
}

export default LoadingOverlay;


