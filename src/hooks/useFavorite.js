import { useEffect, useState } from "react"

const STORAGE_KEY='mealdb_favorites'
const loadfromStorage = () =>{
    try{
        const raw=localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    }
    catch(err){
        console.log(err)
    }
}

export default function useFav(){
    const [favorites,setFavorites]=useState(loadfromStorage)
    useEffect(()=>{
        try{
            localStorage.setItem(STORAGE_KEY,JSON.stringify(favorites))
            ,[favorites]
        }
        catch(err){
            console.log(err)
        }
    })
    const toggle = (meal) =>{
        setFavorites((prev)=>{
            const exists=prev.some((m)=>m.idMeal===meal.idMeal)
            return exists?(prev.filter((m)=>m.idMeal!==meal.idMeal)):[...prev,meal]
        })
    }
     const isFavorite=(id)=>favorites.some((m)=>m.idMeal===id)
     return[favorites,toggle,isFavorite]
}