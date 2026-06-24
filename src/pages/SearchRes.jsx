import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchByCatergory } from "../api/mealdb";

const SearchRes = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    if (!query) return;
    searchByCatergory(query)
      .then((res) => setMeals(res.data.meals || []))
      .catch((err) => console.log(err))
  }, [query]);
  return (
    <div className="search">
      <h2>Search Results for: <i>'{query}'</i></h2>
      {meals.length===0?<p className="noresult">No Results found!</p>:
      <div className="searchRes">
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strMeal}</p>
        </div>
      ))}
      </div>}
    </div>
  );
};

export default SearchRes;