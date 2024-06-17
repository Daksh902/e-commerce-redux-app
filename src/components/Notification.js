import React from 'react';
import '../styles/Notification.css';

const Notification = ({ message, onClose }) => {
  if (!message) return null;
  
  return (
    <div className="notification">
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">X</button>
    </div>
  );
};

export default Notification;
