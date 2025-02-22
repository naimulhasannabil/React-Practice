import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800">
            {props.title}
          </div>

          {/* Navigation Links and Search Form */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            <ul className="hidden sm:flex space-x-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900 transition duration-300">
                  {props.aboutText}
                </a>
              </li>
            </ul>

            {/* Search Form */}
            <form action="" className="flex items-center">
              <input
                className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* Add space between input and button using `mr-2` or any other spacing utility */}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ml-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string,
  aboutText : PropTypes.string
}