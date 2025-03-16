import React, { useEffect, useState } from 'react';
import Alert from './Alert';

export default function TextFrom(props) {
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [alert, setAlert] = useState(null); // State for managing alerts

  // Effect to Update the Document title based on dark mode
  useEffect(() => {
    document.title = darkMode ? 'TextUtils - DarkMode' : 'TextUtils - LightMode';
  });

  // Function to show an alert
  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null); // Hide the alert after 3 seconds
    }, 3000);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert('success', 'Text converted to uppercase!');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert('success', 'Text converted to lowercase!');
  };

  const handleClearClick = () => {
    setText('');
    showAlert('warning', 'Text cleared!');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById('description');
    text.select();
    navigator.clipboard.writeText(text.value).then(() => {
      showAlert('success', 'Text copied to clipboard!');
    });
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    showAlert('success', 'Extra spaces removed!');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    showAlert('info', `Dark mode ${darkMode ? 'disabled' : 'enabled'}!`);
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    showAlert('success', 'Text reversed!');
  };

  const handleCapitalizeWords = () => {
    let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    showAlert('success', 'Words capitalized!');
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showAlert('success', 'Text downloaded!');
  };

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    showAlert('info', 'Text converted to speech!');
  };

  const toggleReadOnly = () => {
    setReadOnly(!readOnly);
    showAlert('info', `Editing ${readOnly ? 'enabled' : 'disabled'}!`);
  };

  // Dynamic classes based on dark mode
  const containerClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const textareaClass = darkMode
    ? 'bg-gray-800 text-white border-gray-700'
    : 'bg-white text-gray-900 border-gray-300';
  const buttonClass = darkMode
    ? 'bg-gray-700 hover:bg-gray-600 border-gray-600'
    : 'bg-green-500 hover:bg-green-600 border-green-600';

  return (
    <div className={`min-h-screen ${containerClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alert Component */}
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        {/* Heading */}
        <div className="flex justify-between items-center">
          <h1 className="ml-3 my-3 text-2xl sm:text-3xl lg:text-4xl">{props.heading}</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Textarea */}
        <div className="p-4">
          <textarea
            id="description"
            name="description"
            rows={10}
            value={text}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${textareaClass}`}
            placeholder="Enter your description here..."
            onChange={handleOnChange}
            readOnly={readOnly}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 p-4">
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleCapitalizeWords}
          >
            Capitalize Words
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleDownload}
          >
            Download Text
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={handleTextToSpeech}
          >
            Text to Speech
          </button>
          <button
            className={`w-full border text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${buttonClass}`}
            onClick={toggleReadOnly}
          >
            {readOnly ? 'Enable Editing' : 'Disable Editing'}
          </button>
        </div>

        {/* Text Summary */}
        <div className="container mx-auto text-center my-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Your Text Summary</h1>
          <p className="text-sm sm:text-base lg:text-lg">
            {text.split(' ').filter((word) => word !== '').length} words and {text.length} characters
          </p>
          <p className="text-sm sm:text-base lg:text-lg">
            {0.008 * text.split(' ').filter((word) => word !== '').length} Minutes Read
          </p>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">Preview</h2>
          <p className="text-sm sm:text-base lg:text-lg break-words">{text}</p>
        </div>
      </div>
    </div>
  );
}