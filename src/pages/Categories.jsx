import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchByCatergories } from '../api/mealdb'
import { MealCart } from '../components/MealCart'
import FavBtn from '../components/FavBtn'

export const Categories = () => {
  const {category}=useParams()
  const [meals,setMeal]=useState([])
  useEffect(()=>{
    fetchByCatergories(category)
    .then((res)=>{(setMeal(res.data.meals))})
    .catch((err)=>console.log(err))
  },[category])
   
  return (
    <div className="meal-container">
      {meals.map((meal) => (
        <MealCart key={meal.idMeal} meal={meal} />
        ))}
    </div>
  )
}
