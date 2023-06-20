import React from 'react'

const GradientButton = ({text,onClick}) => {
  return (
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" 
         onClick={onClick}
        >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-neutral-950 rounded-md group-hover:bg-opacity-0">
           {text} 
        </span>
        </button>
  )
}

export default GradientButton