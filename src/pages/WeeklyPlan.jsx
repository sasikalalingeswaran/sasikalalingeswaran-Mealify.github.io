import { Trash2,NotebookPen } from 'lucide-react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

const WeeklyPlan = ({plans}) => {
    const days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
  return (
    <div className='weeklyplan'>
       <table>
        <thead>
            <tr>
                <th></th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                
            </tr>
        </thead>
        <tbody>
            {days.map((day)=>{
                return(
                <tr key={day}>
                    <td>{day}</td>
                    <td>{plans[day]?.breakfast||"-"}</td>
                    <td>{plans[day]?.lunch||"-"}</td>
                    <td>{plans[day]?.dinner||"-"}</td>
                </tr>
            )})}
        </tbody>
       </table>
       <Link to={'/PlanForm'}>
       <button className='newbtn'> + Set Meal</button>
       </Link>
    </div>
  )
}

export default WeeklyPlan