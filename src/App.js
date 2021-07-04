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
import Products from "./pages/Products";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/admin/login" exact component={AdminLogin}></Route>
          <ProtectedRoute
            path="/admin/control"
            exact
            component={ControlPanel}
          ></ProtectedRoute>
          <Route path="/control/products" exact component={Products}></Route>
          <Route path="/control/price" exact component={Price}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
