import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {isLoggedIn}from "../utils/auth"
import ControlPanelHeader from "./ControlPanelHeader"
import Price from "./Price"
import ProductsTablePage from "./ProductsTablePage"
import {Link, NavLink,useHistory} from "react-router-dom"
const ControlPanel = () => {
    return (

            <><Router>
                <ControlPanelHeader/>

                          


       
               <Route exact path="/products" component={ProductsTablePage} />
		    <Route exact path="/price" component={Price} />

     
            

            </Router>
            
            </>
            
            

    )
}

export default ControlPanel
