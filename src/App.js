import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedIn } from "./utils/auth";
import ControlPanel from "./pages/ControlPanel";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Price from "./pages/Price";
import ProductsTablePage from "./pages/ProductsTablePage";
import ControlPanelHeader from "./pages/ControlPanelHeader";
import { useLocation } from "react-router-dom";
import Products from "./pages/ProductsTablePage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact /* component={Home} */>
            <Home />
          </Route>

          {!isLoggedIn() ? (
            <>
              <Header />
              <Route path="/login" exact component={AdminLogin}></Route>
            </>
          ) : (
            <>
              <ControlPanelHeader />
              <ProtectedRoute
                path="/login/products"
                /* exact */
                component={Products}
              />

              <ProtectedRoute
                path="/login/price"
                /* exact */ component={Price}
              />
            </>
          )}

          {/* <Route path="/control" exact component={ControlPanel}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
