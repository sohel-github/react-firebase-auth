import React from 'react'

const Spinner = () => {
  return (
    <>
      <div class="flex items-center justify-center">
        <div class="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* <div class="flex items-center justify-center">
        <div class="flex space-x-2">
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </>
  )
}

export default Spinner