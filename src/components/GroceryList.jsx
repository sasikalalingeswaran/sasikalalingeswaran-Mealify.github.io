import { useEffect, useState } from "react"

const GroceryList = () => {
  const [items,setItems]=useState([])
  const deleteItem = (e) =>{
    const deleteItems=items.filter(item => item!==e)
    setItems(deleteItems)
    localStorage.setItem('groceryList', JSON.stringify(deleteItems));
  }
  useEffect(()=>{
     const saved=JSON.parse(localStorage.getItem('groceryList')) || [];
     setItems(saved)  
  },[])
  return (
    <div className="grocery">
      <h2>Grocery List </h2>
      <div className="underLine"></div>
        <ul className="grocery-list">
        {items.map((item, index) => (
          <li key={index}>{item}<button className="gldlt" onClick={()=>deleteItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroceryList