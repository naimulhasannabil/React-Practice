import React from 'react'

export default function TextFrom() {
  return (
    <div>
      <div className="p-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        rows={4}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter your description here..."
      ></textarea>
    </div>
    </div>
  )
}
