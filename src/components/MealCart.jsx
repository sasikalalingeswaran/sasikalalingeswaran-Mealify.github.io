import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavBtn from './FavBtn'
import useFav from '../hooks/useFavorite'

export const MealCart = ({meal}) => {
  const [,toggle,isFavorite]=useFav()
  const fav=isFavorite(meal.idMeal)
  return (
    <div title={meal.strMeal} className='card'>
      <Link to={`/meal/${meal.idMeal}`}> 
      <img src={meal.strMealThumb}/>
      <FavBtn meal={meal} toggle={toggle} isFav={fav}/>
      </Link>
    </div>
  )
}
