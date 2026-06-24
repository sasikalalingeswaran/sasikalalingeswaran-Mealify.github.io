import axios from "axios"

const BASE='https://www.themealdb.com/api/json/v1/1'

export const fetchCatergory=()=>axios.get(`${BASE}/categories.php`)
export const fetchByCatergories=(cat)=>axios.get(`${BASE}/filter.php?c=${cat}`)
export const fetchById=(id)=>axios.get(`${BASE}/lookup.php?i=${id}`)
export const searchByCatergory=(query)=>axios.get(`${BASE}/search.php?s=${query}`)