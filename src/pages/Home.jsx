import { useEffect, useState  } from "react"
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ArrowRight  } from 'lucide-react';
const Home = () => {
   const [query,setQuery]=useState('')
  const navigate=useNavigate()
  const SearchMeal = async(e) =>{
    e.preventDefault()
    if(!query) return 
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }
    return (
    <div className='home'>
      <div className="side"></div>
      <img src="food.png" className="image"></img>
      <div className="content">
      <p className="welcome">Welcome</p>
      <h2> Discover Delicious <br/> <span className="meal"> Meals </span></h2>
      <p className="para"> Search and find recipe of your favorite meals.</p>
      <div className="line"></div>
       <form onSubmit={SearchMeal} className='Bar'>
            <input type='search' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..."/>
            <button type='submit'> Search </button>
          </form></div>
        <div className="categories">
          <div className="container">
            <Link to={'/category/Chicken'}>
            <div className="flex-container1">
              <img src="chick.png"></img>
              <p> Chicken </p>
            </div></Link>
            <Link to={'/category/Vegan'}>
            <div className="flex-container2">
              <img src="vege.png"></img>
              <p> Vegan </p>
            </div></Link>
            <Link to={'/category/Beef'}>
            <div className="flex-container3">
               <img src="beef.png"></img>
               <p> Beef </p>
            </div></Link>
            <Link to={'/category/SeaFood'}>
            <div className="flex-container4">
               <img src="sea.png"></img>
               <p> SeaFood </p>
            </div></Link>
          </div>
          <a href='/myitems' className="view"> View All Categories <ArrowRight className="arrow"/></a>
        </div>
    </div>
  )
}


export default Home
