import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          type="success"
          message="Your action was successful!"
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;