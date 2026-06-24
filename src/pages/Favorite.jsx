import { useEffect, useState } from "react";
import { MealCart } from "../components/MealCart";


export const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("mealdb_favorites")) || [];
    setFavorites(stored);
  }, []);
  
  return (
    <div className="fav">
      <h6>{favorites.length}</h6>
       <h2> My Favorites</h2>
       <p>Bliss on a plate </p>
       <div className="under"></div>
    <div className="favorites">
      {favorites.map((meal) => (
        <MealCart key={meal.idMeal} meal={meal} />
      ))}
    </div></div>
  );
};