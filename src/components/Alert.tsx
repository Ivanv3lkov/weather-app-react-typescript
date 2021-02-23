import React from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div>
      <div onClick={onClose}></div>
      <div>
        <header >
          <p>{message}</p>
        </header>
        <footer >
          <button onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert;