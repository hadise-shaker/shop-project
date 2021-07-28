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
import ResponsiveDrawer from "./pages/CategoriesDrawer";
import NotFound from "./pages/NotFound";
import FinalShop from "./components/FinalShop";
import CategoriesDrawer from "./pages/CategoriesDrawer";
import Payment from "./pages/payment/Payment";
import SuccessPayment from "./pages/payment/SuccessPayment";
import FailedPayment from "./pages/payment/FailedPayment";
function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
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

            <Route path="/finalShop" exact component={FinalShop} />

            {/*           <Route path="/test" exact component={ResponsiveDrawer}>
          </Route> */}
            {/*             {!isLoggedIn() && (
              <> */}
            <Route path="/login" exact component={AdminLogin}></Route>
            {/*               </>
            )} */}

            <Route exact path="/admin" component={ProductsTablePage} />
            <Route exact path="/admin/price" component={Price} />
            <Route exact path="/admin/orders" component={OrdersManagment} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/payment/success" component={SuccessPayment} />
            <Route exact path="/payment/failed" component={FailedPayment} />
            {/*           <Route path="*" exact component={NotFound}></Route> */}
          </Switch>
        </MainLayout>
        <Switch>
          <Route
            path="/categorylist/:category"
            exact
            component={CategoriesDrawer}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
