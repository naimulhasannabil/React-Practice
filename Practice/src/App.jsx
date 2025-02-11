import './App.css'


function App() {
  

  return (
    <>
      <nav>
        <div className='container sm:flex py-2 ml-5 mr-5'>
        <div className="logo text-3xl">
          TextUtils
        </div>
        <div className="container sm:flex justify-between py-2">
            <ul className='sm:flex'>
              <li><a className='sm:p-7' href="/">Home</a></li>
              <li><a href="/">about</a></li>
            </ul>
            <form action="" className='sm:flex mr-4'>
              <input className='border' type="search" placeholder='Search' aria-label='Search'/>
              <button className='p-3 mr-7' type='submit'>Search</button>
            </form>
        </div>
        </div>
      </nav>
    </>
  )
}

export default App
