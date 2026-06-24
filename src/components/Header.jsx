import { useState , useEffect, use} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart , NotepadText,ShoppingBag} from 'lucide-react';
import {Popup} from 'reactjs-popup'
import ChatBot from './ChatBot';
export const Header = () => {
  const [query,setQuery]=useState('')
  const [favorites, setFavorites] = useState([]);
  const navigate=useNavigate()
  const SearchMeal = async(e) =>{
    e.preventDefault()
    if(!query) return 
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }
  useEffect(() => {
      const stored =
        JSON.parse(localStorage.getItem("mealdb_favorites")) || [];
      setFavorites(stored);
    }, []);

  return (
    <div>
      <header>
        <nav>
          <Link to="/" className='logo'> Meal<span id='span'>ify</span>.</Link>
          <Popup trigger={<img src='chatbot.png' className='chatimg' title='Chatbot'/>} modal nested>
         {
          close=>(
            <div>
              <ChatBot close={close}/>
              </div>
          )
         }
         </Popup> 
          <a href='/GroceryList' className='shoppingBag' title='Grocery List'><ShoppingBag/></a>
          <a href='/myitems'>  <button className='viewcat'>View Category</button> </a>
          <a href='/favorite'  title='Favorites' > 
          <Heart className='heart'/></a>
          <div className="fav"><h6>{favorites.length}</h6></div>
          <form onSubmit={SearchMeal} className='searchBar'>
            <input type='search' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search..."/>
            <button type='submit'> Search </button>
          </form>
           <a href='/WeeklyPlan' title='Weekly Plan' className='notepad'><NotepadText/></a>
        </nav>
      </header>
    </div>
  )
}
