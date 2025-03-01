import React, {useState} from 'react'



export default function TextFrom(props) {
    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <h1 className='ml-3 my-3 text-3xl'>{props.heading}</h1>
      <div className="p-4">
      <textarea
        id="description"
        name="description"
        rows={10}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter your description here..."
      ></textarea>
    </div>
    <button className="ml-5 border border-green-600 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
  Convert to Uppercase
</button>
    </div>
  )
}
