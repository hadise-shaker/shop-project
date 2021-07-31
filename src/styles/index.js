import { makeStyles, createStyle } from "@material-ui/core";
import { COLORS, FONTS } from "./constantsVariables";
import "./fonts/font.css";
export const loginUseStyle = makeStyles((theme) => ({
  link: {
    fontSize: "22px",
    fontWeight: "bold",
    color: " white",
    justifyContent: "center",

    color: "white",
    textDecoration: "none",
    margin: "0 0px 0 40px",
  },
  color: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    marginRight: "10px",
  },
  img: {
    width: "80px",
    height: "80px",
    cursor: "pointer",
  },
  link_active: {
    color: "rgb(120, 0, 178)  !important",
    fontSize: "20px",
    paddingBottom: "5px",
    borderBottom: "2px solid  rgb(120, 0, 178)",
    fontWeight: "bold",
  },
  tabs: {
    margin: "20px",
    color: "white",
    textDecoration: "none",
    margin: "0 0px 0 40px",
    fontWeight: "bold",
  },

  backgroundColor: {
    backgroundColor: COLORS.mainColor,
    flexGrow: 1,
    marginBottom: "20px",
    /* zIndex: "999999", */
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: COLORS.mainColor,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: COLORS.mainColor,
    /* color: "green" */
    fontSize: "2rem",
    /*     fontFamily: FONTS.mainFont, */
  },
  container: {
    marginTop: theme.spacing(8),
    border: `2px solid ${COLORS.lightMainColor}`,
    borderRadius: "7px",
  },

  /*   input: {
    color: COLORS.lightMainColor,
  }, */
  header: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    /*     marginBottom: "20px", */
    /*  backgroundColor: COLORS.mainColor, */
    marginBottom: theme.spacing(2),
    /*     color: "white",
    textDecoration: "none",
    margin: "0 0px 0 40px", */
    /* zIndex: "99999", */
  },
  root: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "white",
  },
  link: {
    marginRight: theme.spacing(3),
  },
}));
