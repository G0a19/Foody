import classes from "./Contact.module.css";

import ContactImg from "./../../img/Contact.png";
import Email from "./../../UI/Email";
import GitHub from "../../UI/GitHub";
import Instagram from "../../UI/Instagram";
import Linkedin from "../../UI/Linkedin";
import CV from "./Gal mafgaonker - CV.pdf";

const Contact = function () {
  return (
    <div className={classes.continer}>
      <div className={classes.gal}>
        <img src={ContactImg} alt="contact" />
        <p>gal mafgaonker</p>
      </div>

      <div className={classes.contact}>
        <ul>
          <li>
            <Email />
            <span>howtoexp30@gmail.com</span>
          </li>
          <li>
            <Linkedin />
            <span>https://www.linkedin.com/in/gal-mafgaonker-bb7a8b209/</span>
          </li>
          <li>
            <GitHub />
            <span>https://github.com/G0a19?tab=repositories</span>
          </li>
          <li>
            <Instagram />
            <span>https://instagram.com/galmafgaonker</span>
          </li>
        </ul>
      </div>

      <div className={classes.download}>
        <a href={CV} download="Gal mafgaonker - CV.pdf">
          download cv
        </a>
      </div>

      <svg
        className={classes.one}
        viewBox="0 0 1443 328"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1443 200.5C1164.5-26.5 198 578 .5 200.5V0H1443v200.5z"
          fill="var(--background)"
        />
      </svg>
    </div>
  );
};

export default Contact;
