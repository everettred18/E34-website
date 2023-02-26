import { createUseStyles } from "react-jss";

export default useStyles = createUseStyles({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    width: "80px",
    height: "80px",
    marginRight: "1rem",
  },
  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    listStyle: "none",
    margin: "0",
    "& li": {
      marginLeft: "1rem",
      "&:first-child": {
        marginLeft: "0",
      },
      "& a": {
        color: "#333",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
});
