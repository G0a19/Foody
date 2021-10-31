import { useEffect } from "react";

import classes from "./Ui.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import UiImg from "./../../img/Software-Development.png";
import phone from "./../../img/phone-ui.png";

const Ui = function () {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <section>
      <div className={classes.header}>
        <h1>ui/ux design</h1>
      </div>

      <div className={classes.about_ui}>
        <div>
          <p>
            The site was designed by Gal mafgaonker, a site that contains the
            designer's design and React capabilities.
          </p>
          <p>
            The animations on the site are through the aos package. Which in my
            opinion is amazing and excellent for sites whose purpose is to
            highlight the UI to the user and that way the user will also be able
            to enjoy pleasant transitions in the eye.
          </p>
        </div>
        <img
          src={UiImg}
          alt="ui-img"
          data-aos="fade-down"
          data-aos-once="false"
        />
      </div>

      <div className={classes.about_ui2}>
        <img
          src={phone}
          alt="phone"
          data-aos="fade-down"
          data-aos-once="false"
        />
        <div>
          <p>
            The website is fully responsive to all platforms. pc, phone, ipad,
            tablet and more!
          </p>
          <p>
            The site can look different on different platforms because it is
            designed to give the user the maximum conditions that can be
            generated, so that the user will be most comfortable having to
            scroll through the site and use it most comfortably.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ui;
