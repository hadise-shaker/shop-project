import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import Bnazanin from "./styles/fonts/BNazanin.woff2";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/fonts/font.css";
const raleway = {
  fontFamily: "B Nazanin",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `
    local('B Nazanin'),
    url(${Bnazanin}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: "rtl",
  /*   fontFamily: "B Nazanin", */
  typography: {
    fontFamily: "B Nazanin",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [raleway],
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StylesProvider jss={jss}>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
