import React from 'react';
import '../styles/Alert.css';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  const errorMessage = message[0].toUpperCase() + message.substring(1);

  return (
    <div className="alert">
      <div onClick={onClose}></div>
      <div>
        <h3 >
          <p>{errorMessage}</p>
        </h3>
          <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Alert;