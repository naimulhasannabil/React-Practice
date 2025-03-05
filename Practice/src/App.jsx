import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
// import TextFrom from './components/TextFrom'



function App() {
  

  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    {/* <TextFrom heading='Enter the text to analyze below'/> */}
    <About/>
    </>
  )
}

export default App
