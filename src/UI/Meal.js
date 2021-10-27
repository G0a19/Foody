import { useEffect } from "react";

import classes from "./Meal.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Meal = function (props) {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, offset: 10 });
  }, []);

  return (
    <div className={classes.meal} data-aos={"zoom-in"}>
      <img src={props.img} alt="meal" />
      <p>{props.context}</p>
    </div>
  );
};

export default Meal;
