import React, { useEffect, useState } from 'react'
import { fetchById } from '../api/mealdb'
import { Link, useParams } from 'react-router-dom'

export const MealDetail = () => {
  const {idMeal}=useParams()
  const [meal,setMeal]=useState({})
  const addToGroceryList = (e) =>{
    const ingredients=[]
    for(let i=1;i<=20;i++){
      const ingredient=meal[`strIngredient${i}`]
      if(ingredient && ingredient.trim()){
        ingredients.push(`${ingredient}`)
      }
    }
    const existing=JSON.parse(localStorage.getItem('groceryList')) || [];
    const update=[...new Set([...existing,...ingredients])];
    localStorage.setItem('groceryList',JSON.stringify(update));
  }
  useEffect(()=>{
    fetchById(idMeal)
    .then((res)=>(setMeal(res.data.meals?.[0] || null)))
    .catch((err)=>console.log(err))
  },[idMeal])

  const ingredients=[]
  for(let i=1; i<=20; i++){
    const ing=meal[`strIngredient${i}`]
    const measure=meal[`strMeasure${i}`]
    if(ing?.trim()) ingredients.push(`${ing} ${measure}`)
  }
  return (
    <div className='meal-details'>
      <a href='#inst' className='viewinst'>View Instructions  </a>
      <button className='glbtn' onClick={(e)=>{addToGroceryList(meal)}}>+ Add to Grocery List</button>
      <h3>{meal.strMeal}</h3>
      <div className="cat-line"></div>
      <img src={meal.strMealThumb}/>
      <div className='ing'>
        <h4> Ingredients:</h4>
        <ul>
          {ingredients.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='utube'>
        <a href={meal.strYoutube} target='_blank'>Watch Youtube</a>
      </div>
      <section id="inst">
        <h6>Instructions </h6>
        <p>{meal.strInstructions}</p>
      </section>
    </div>
  )
}
