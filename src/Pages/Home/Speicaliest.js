import { useEffect, useState } from "react";

import classes from "./Speicaliest.module.css";
import Meal from "../../UI/Meal";
import { Link } from "react-router-dom";

const Speicaliest = function () {
  const [seaFood, setSeaFood] = useState([]);

  useEffect(() => {
    const meals = async () => {
      const call = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const response = await call.json();
      await response.meals.forEach((meal, i) => {
        setSeaFood((prev) => [...prev, meal]);
      });
    };

    meals();
  }, []);

  const Speical =
    seaFood.length !== 0
      ? seaFood.map((meal, i) => (
          <Meal key={i} img={meal.strMealThumb} context={meal.strMeal} />
        ))
      : "";

  return (
    <section className={classes.Speicaliest}>
      <div className={classes.title}>
        <h1>Speicaliest</h1>
      </div>

      <div className={classes.meals}>{Speical}</div>

      <div className={classes.link}>
        <Link to="/successful">successful</Link>
      </div>
    </section>
  );
};

export default Speicaliest;
