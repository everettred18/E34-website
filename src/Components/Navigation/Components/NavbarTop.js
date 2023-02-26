import React from "react";
import useStyles from "../Styles/NavBarTopStyles";

const NavigationBarTop = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src="your-logo-image-url" alt="Your Logo" />
      </div>
      <ul className={classes.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBarTop;
