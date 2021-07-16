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
import ProductsTable from "./components/ProductsTable";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import MainLayout from "./Layout/MainLayout";
import ControlPanelLayout from "./Layout/ControlPanelLayout";
function App() {
  return (
    <div className="App">
      {isLoggedIn() ? (
        <Router>
          <ControlPanelLayout>
            <Switch>
              <ProtectedRoute
                path="/admin/products"
                exact
                component={ProductsTable}
              />

              <ProtectedRoute path="/admin/price" exact component={Price} />
            </Switch>
          </ControlPanelLayout>
        </Router>
      ) : (
        <Router>
          <MainLayout>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={AdminLogin}></Route>
              {/* <Home /> */}

              <Route path="/cart" exact component={Cart}>
                {/* <Cart /> */}
              </Route>
            </Switch>
          </MainLayout>
        </Router>
      )}
    </div>
  );
}

export default App;
