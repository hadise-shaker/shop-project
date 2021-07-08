import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {isLoggedIn}from "../utils/auth"
import ControlPanelHeader from "./ControlPanelHeader"
import Price from "./Price"
import ProductsTablePage from "./ProductsTablePage"
const ControlPanel = () => {
    return (

            <Router>
                <ControlPanelHeader/>
                <Switch>
                    <Route path="/control/products" exact component={ProductsTablePage}></Route>
                    <Route path="/control/price" exact component={Price}></Route>
                </Switch>

            </Router>
            
            

    )
}

export default ControlPanel
