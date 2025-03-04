import React, {useState} from 'react'



export default function TextFrom(props) {

    const handleUpClick = ()=> {
      // console.log("UpperCase was click")
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleOnChange = (event)=> {
      // console.log("On Change")
      setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = 'new Text'; wrong way to change the state
    // setText('new Text'); Correct way to change the state
  return (
    <>
    <div className='container'>
        <h1 className='ml-3 my-3 text-3xl'>{props.heading}</h1>
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
    <div className="container text-center my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
