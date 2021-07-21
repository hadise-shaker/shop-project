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
import OrdersManagment from "./pages/OrdersManagment";
import ProductsTablePage from "./pages/ProductsTablePage";
import ControlPanelHeader from "./pages/ControlPanelHeader";
import { useLocation } from "react-router-dom";
import Products from "./pages/ProductsTablePage";
import ProductsTable from "./components/ProductsTable";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import MainLayout from "./Layout/MainLayout";
import ControlPanelLayout from "./Layout/ControlPanelLayout";
import AllProductsInGroup from "./pages/AllProductsInGroup";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact /* component={Home} */>
            <Home />
          </Route>
          <Route path="/AllProductsInGroup/لباس مردانه" exact>
            <AllProductsInGroup />
          </Route>
          <Route
            path="/AllProductsInGroup/:id"
            exact
            component={ProductDetail}
          />

          {!isLoggedIn() ? (
            <>
              <Header />
              <Route path="/login" exact component={AdminLogin}></Route>
            </>
          ) : (
            <>
              <ControlPanelHeader />
              <ProtectedRoute
                path="/admin/products"
                /* exact */
                component={Products}
              />

              <ProtectedRoute
                path="/admin/price"
                /* exact */ component={Price}
              />
              <ProtectedRoute
                path="/admin/orders"
                /* exact */ component={OrdersManagment}
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
