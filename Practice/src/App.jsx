
import './App.css'

let Name = "Nabil";
function App() {
  

  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>hello {Name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus tenetur. Quas esse ratione eum ab accusamus rem voluptatum possimus minus cum dolor sint omnis dicta illum soluta, iusto temporibus perspiciatis nobis alias fugit non!</p>
      </div>
    </>
  )
}

export default App
