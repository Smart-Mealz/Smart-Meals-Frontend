import React from 'react'
import jollof from "../assets/images/jollof.png"


const Mealkit = ({image, tag, title, description, time}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {tag && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-sm font-medium">
          {tag}
        </span>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-blue-900 font-semibold text-sm mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="flex items-center text-xs text-blue-700 font-medium">
        <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
        </svg>
        {time}
      </div>
    </div>
  </div>
  )
}

export default Mealkit