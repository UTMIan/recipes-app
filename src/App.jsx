import { useEffect } from "react";
import Card from "./components/card";
import axios from "axios";
import { useState } from "react";
import LetterSelector from "./components/LetterSelector";

function App() {
  // Aviso: Mas tarde haremos un enrrutador
  const [meals, setMeals] = useState([]);

  const getMeals = (letter = 'a') => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals);
        } else {
          setMeals([]);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }

  useEffect(()=>{
    //Get themealdb
    getMeals("b");
  },[]);

  return (
    <div>
      <LetterSelector onSelect={(letter) => getMeals(letter)} />
      <main className="bg-[#180a04] h-screen grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-4">
        {meals.map((meal)=>(
        <Card
          key={meal.idMeal}
          strMeal={meal.strMeal}
          strMealThumb={meal.strMealThumb}
          strInstructions={meal.strInstructions}
        />
        ))}
      </main>
    </div>
  );
}

export default App;
