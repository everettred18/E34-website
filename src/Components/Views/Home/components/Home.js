import React from "react";
import useStyles from "../styles/HomeStyles";
const log = console.log.bind(console);

const Home = () => {
  const classes = useStyles();
  log("hi @Devs ");
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <h1>Welcome to my React app</h1>
        <p>Start building your awesome React application here!</p>
      </header>
    </div>
  );
};

export default Home;
