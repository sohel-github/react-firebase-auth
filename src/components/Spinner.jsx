import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* <div className="flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </>
  )
}

export default Spinner