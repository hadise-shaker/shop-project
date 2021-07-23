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
import ResponsiveDrawer from "./pages/ResponsiveDrawer";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact /* component={Home} */>
            <Home />
          </Route>

          <Route
            path="/AllProductsInGroup/:id"
            exact
            component={ProductDetail}
          />
          <Route path="/cart" exact component={Cart} />
          <Route
            path="/categorylist/:category"
            exact
            component={AllProductsInGroup}
          />
          {/*           <Route path="/test" exact component={ResponsiveDrawer}>
          </Route> */}
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
              <ProtectedRoute
                path="/login/orders"
                /* exact */ component={OrdersManagment}
              />
            </>
          )}

          {/*           <Route path="*" exact component={NotFound}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
