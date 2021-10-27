import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import main from "./../../img/main.jpg";

const Main = function () {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true, offset: 10 });
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.title}>
        <h1>About us</h1>
      </div>
      <div className={classes.about} data-aos="zoom-out">
        <p>
          The company Foody was established in 2021 and it specializes in
          presenting different foods of different people, it showcases the
          ability of Ui in combination with food.
        </p>
        <p>
          The company was founded by Frontend programmer - Gal Mefgaunker. Its
          purpose is to present to its target audience different foods from
          different countries, and allow the user to search for the foods he
          likes. The user will be able to save in his favorites his favorite
          foods and prepare them in his free time.
        </p>
        <div>
          <Link to="/Categories">Categories</Link>
        </div>
      </div>

      <div className={classes.img} data-aos="fade-up">
        <img src={main} alt="img" />
      </div>
    </main>
  );
};

export default Main;
