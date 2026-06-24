import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import Home from './pages/Home'
import { Categories } from './pages/Categories'
import { MealDetail } from './pages/MealDetail'
import SearchRes from './pages/SearchRes'
import { Favorite } from './pages/Favorite'
import { MyItem } from './pages/MyItem'
import WeeklyPlan from './pages/WeeklyPlan'
import PlanForm from './pages/PlanForm'
import GroceryList from './components/GroceryList'

function App() {
   const [plans, setPlans] = useState({})
  return (
    <div>
      <BrowserRouter> 
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/myitems' element={<MyItem/>}/>
        <Route path={'/category/:category'} element={<Categories/>}/>
        <Route path={'/meal/:idMeal'} element={<MealDetail/>}/>
        <Route path={'/search'} element={<SearchRes/>}/>
        <Route path={'/favorite'} element={<Favorite/>}/>
        <Route path={'/WeeklyPlan'} element={<WeeklyPlan plans={plans}/>}/>
        <Route path={'/PlanForm'} element={<PlanForm plans={plans} setPlans={setPlans}/>}/>
        <Route path={'/GroceryList'} element={<GroceryList/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
