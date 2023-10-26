import { useEffect, useState } from "react";
import Card from "./components/card";
import axios from "axios";
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
  };

  useEffect(()=>{
    //Get themealdb
    getMeals();
  },[]);

  return (
    <div>
      <LetterSelector onSelect={(letter) => getMeals(letter)} />
      <main className="grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4">
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
