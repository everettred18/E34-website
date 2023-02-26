import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  App: {
    textAlign: "center",

    "&-header": {
      backgroundColor: "#282c34",
      minHeight: "20vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",

      "& h1": {
        marginBottom: "0.5em",
      },

      "& p": {
        margin: 0,
      },
    },
  },
});
export default useStyles;
