import React, {useState} from 'react'



export default function TextFrom(props) {

    const handleUpClick = ()=> {
      // console.log("UpperCase was click")
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleLoClick = ()=> {
      // console.log("LowerCase was click")
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleClearClick = ()=> {
      // console.log("LowerCase was click")
      let newText = '';
      setText(newText)
    }
    const handleOnChange = (event)=> {
      // console.log("On Change")
      setText(event.target.value)
    }

    //Old one
    // const handleCopy = () => {
    //   let text = document.getElementById("description");
    //   text.select();
    //   text.setSelectionRange(0, 9999);
    //   navigator.clipboard.writeText(text.value);
    // }

    //New version
    const handleCopy = () => {
      let text = document.getElementById("description");
      text.select();
      navigator.clipboard.writeText(text.value).then(() => {
        alert("Text copied to clipboard!"); // Or use a more subtle notification
      });
    };

    // Remove Extra Spaces
    const handleExtraSpaces = () => {

    }
    const [text, setText] = useState('');
    // text = 'new Text'; wrong way to change the state
    // setText('new Text'); Correct way to change the state
  return (
    <>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
  {/* Heading */}
  <h1 className='ml-3 my-3 text-2xl sm:text-3xl lg:text-4xl'>{props.heading}</h1>

  {/* Textarea */}
  <div className="p-4">
    <textarea
      id="description"
      name="description"
      rows={10}
      value={text}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
      placeholder="Enter your description here..."
      onChange={handleOnChange}
    ></textarea>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 p-4">
    <button
      className="w-full sm:w-auto border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      onClick={handleUpClick}
    >
      Convert to Uppercase
    </button>
    <button
      className="w-full sm:w-auto border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      onClick={handleLoClick}
    >
      Convert to Lowercase
    </button>
    <button
      className="w-full sm:w-auto border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      onClick={handleClearClick}
    >
      Clear Text
    </button>
    <button
      className="w-full sm:w-auto border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
      onClick={handleCopy}
    >
      Copy Text
    </button>
  </div>

  {/* Text Summary */}
  <div className="container mx-auto text-center my-4 px-4 sm:px-6 lg:px-8">
    <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Your Text Summary</h1>
    <p className="text-sm sm:text-base lg:text-lg">
      {text.split(" ").filter(word => word !== "").length} words and {text.length} characters
    </p>
    <p className="text-sm sm:text-base lg:text-lg">
      {0.008 * text.split(" ").filter(word => word !== "").length} Minutes Read
    </p>
    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">Preview</h2>
    <p className="text-sm sm:text-base lg:text-lg break-words">{text}</p>
  </div>
</div>
    </> 
  )
}
