import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AdminLogin from "./components/Login/AdminLogin";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import OrdersManagment from "./pages/AdminManagment/OrdersManagment";
import ProductsTablePage from "./pages/Products/ProductsTablePage";
import PriceTable from "./components/AdminManagment/PriceTable";
import Cart from "./pages/Cart/Cart";
import MainLayout from "./Layout/MainLayout";
import ProductDetail from "./components/Products/ProductDetail";
import NotFound from "./components/NotFound/NotFound";
import FinalShop from "./components/Shop/FinalShop";
import CategoriesDrawer from "./pages/Categories/CategoriesDrawer";
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
            <Route path="/login" exact component={AdminLogin} />
            <Route
              exact
              path="/categorylist/:category"
              component={CategoriesDrawer}
            />
            <ProtectedRoute exact path="/admin" component={ProductsTablePage} />
            <ProtectedRoute exact path="/admin/price" component={PriceTable} />
            <ProtectedRoute
              exact
              path="/admin/orders"
              component={OrdersManagment}
            />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/payment/success" component={SuccessPayment} />
            <Route exact path="/payment/failed" component={FailedPayment} />
            <Route path="*" exact component={NotFound}></Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
