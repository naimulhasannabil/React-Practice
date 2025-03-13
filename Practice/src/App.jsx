import './App.css'
import Alert from './components/Alert'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'



function App() {
  

  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    <Alert/>
    <TextFrom heading='Enter the text to analyze below'/>
    {/* <About/> */}
    </>
  )
}

export default App
