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
import { ModalProvider } from "./context/modalContext";
function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/admin-login" exact component={AdminLogin}></Route>
            <ProtectedRoute
              path="/admin/control/"
              exact
              component={ControlPanel}
            ></ProtectedRoute>
          </Switch>
        </Router>
      </ModalProvider>
    </div>
  );
}

export default App;
