import React from 'react';

function Alert(props) {
  const { type, message, onClose } = props;

  // Determine the alert class based on the type
  const alertClass = `alert alert-${type}`;

  return (
    <div className={alertClass} role="alert">
      {message}
      {onClose && (
        <button type="button" className="close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}

// Define default props (optional)
Alert.defaultProps = {
  type: 'info', // Default alert type
  message: 'This is an alert message.', // Default message
  onClose: null, // No close button by default
};

export default Alert;