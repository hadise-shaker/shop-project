import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const MainLayout = ({children}) => {
    return (
        <div>


<Header/>

        {children}



        </div>

    )
}

export default MainLayout
