import React, {useState} from 'react'



export default function TextFrom(props) {

    const handleUpClick = ()=> {
      console.log("UpperCase was click")
    }
    const handleOnChange = ()=> {
      console.log("On Change")
    }
    const [text, setText] = useState('Enter text here');
    // text = 'new Text'; wrong way to change the state
    // setText('new Text'); Correct way to change the state
  return (
    <div>
        <h1 className='ml-3 my-3 text-3xl'>{props.heading} - {text}</h1>
      <div className="p-4">
      <textarea
        id="description"
        name="description"
        rows={10} value={text}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter your description here..." onChange={handleOnChange}
      ></textarea>
    </div>
    <button className="ml-5 border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md" onClick={handleUpClick}>
  Convert to Uppercase
</button>
    </div>
  )
}
