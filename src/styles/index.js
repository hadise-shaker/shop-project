import { makeStyles, createStyle } from "@material-ui/core";
import { COLORS, FONTS } from "./constantsVariables";
import "./fonts/font.css";
export const loginUseStyle = makeStyles((theme) => ({
  backgroundColor: {
    backgroundColor: COLORS.mainColor,
    flexGrow: 1,
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
    color: "green",
    fontSize: "2rem",
    /*     fontFamily: FONTS.mainFont, */
  },
  container: {
    marginTop: theme.spacing(8),
    border: `2px solid ${COLORS.lightMainColor}`,
    borderRadius: "7px",
  },
  text: {
    color: "green",
    /*     fontFamily: FONTS.mainFont, */
  },
  /*   input: {
    color: COLORS.lightMainColor,
  }, */
  header: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: COLORS.mainColor,
  },
  root: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  link: {
    marginRight: theme.spacing(3),
  },
}));
