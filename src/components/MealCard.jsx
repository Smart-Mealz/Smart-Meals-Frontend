import React from 'react'

const MealCard = ({ image, title, description}) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded"
      />
      <h2 className="text-orange-400 text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default MealCard