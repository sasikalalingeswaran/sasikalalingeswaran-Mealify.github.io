import { useEffect, useState } from 'react'
import { fetchCatergory } from '../api/mealdb'
import { Link } from 'react-router-dom';

export const MyItem = () => {
   const [category,setCategory]=useState([])
  useEffect(()=>{
    fetchCatergory()
    .then((res)=>setCategory(res.data.categories))
    .catch((err)=>console.log(err))
  },[]);
  return(
    <div className="cat">
      <h3> Meal Categories </h3>
      <p> Discover delicious recipes from around the world</p>
      <div className="underline"></div>
      <div className="display">
    {category.map((cat)=>(
      <Link to={`/category/${cat.strCategory}`} key={cat.idCategory} className=''>
        <img src={cat.strCategoryThumb}></img>
        </Link>
    ))}
  </div></div>
  )
}
