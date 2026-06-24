import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PlanForm = ({plans,setPlans}) => {
  const[day,setDay]=useState('Sunday')
  const[breakfast,setBreakfast]=useState('')
  const[lunch,setLunch]=useState('')
  const[dinner,setDinner]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    setPlans(prev=>({
      ...prev,
        [day]:{
          breakfast,
          lunch,
          dinner
        }
      }))
      setBreakfast('')
      setLunch('')
      setDinner('')
  }
  return (
    <div>
        <form className='plan' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter breakfast' onChange={(e)=>setBreakfast(e.target.value)}/>
            <input type='text' placeholder='Enter lunch' onChange={(e)=>setLunch(e.target.value)}/>
            <input type='text' placeholder='Enter dinner' onChange={(e)=>setDinner(e.target.value)}/>
            <select onChange={(e)=>setDay(e.target.value)}>
                <option value={'--- Select Day ---'}>-- Select Day --</option>
                <option value={'Sunday'}>Sunday</option>
                <option value={'Monday'}>Monday</option>
                <option value={'Tuesday'}>Tuesday</option>
                <option value={'Wednesday'}>Wednesday</option>
                <option value={'Thursday'}>Thursday</option>
                <option value={'Friday'}>Friday</option>
                <option value={'Saturday'}>Saturday</option>
            </select>
            <div className="btns">
            <button className='ad' type='submit'>Add</button>
            <Link to={'/WeeklyPlan'}>
            <button className='ba'>Go Back</button></Link>
            </div>
        </form>
    </div>
  )
}

export default PlanForm