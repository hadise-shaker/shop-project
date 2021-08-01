import React from 'react'
import Header from "../components/MainComponents/Header"
import Footer from "../components/MainComponents/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const MainLayout = (props) => {
    return (
        <div>


         <Header/>

        {props.children}


        <Footer/>
        </div>

    )
}

export default MainLayout
