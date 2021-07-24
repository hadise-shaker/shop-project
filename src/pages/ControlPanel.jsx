import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {isLoggedIn}from "../utils/auth"
import ControlPanelHeader from "./ControlPanelHeader"
import Price from "./Price"
import ProductsTablePage from "./ProductsTablePage"
import OrdersManagment from "./OrdersManagment"
import {Link, NavLink,useHistory} from "react-router-dom"
const ControlPanel = () => {
    return (

            <>
            <Router>
{/*                 <ControlPanelHeader/> */}

                          
                    <Switch>


{/* <ProductsTablePage/> */}
       
                <Route exact path="/admin" component={ProductsTablePage} />
		        <Route exact path="/admin/price" component={Price} />
		        <Route exact path="/admin/orders" component={OrdersManagment} />

     
            
                </Switch>
            </Router>
            
            </>
            
            

    )
}

export default ControlPanel
