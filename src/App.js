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
function App() {
  return (
    <div className="App">
      <Router>
        {!isLoggedIn() && <Header />}

        <Route path="/home" exact /* component={Home} */>
          <Header />
          <Home />
        </Route>
        <Route path="/login" exact component={AdminLogin}></Route>

        <Route path="/control" exact component={ControlPanel}></Route>
      </Router>
    </div>
  );
}

export default App;
