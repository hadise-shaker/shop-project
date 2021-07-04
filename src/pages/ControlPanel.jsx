import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {isLoggedIn}from "../utils/auth"
import ControlPanelHeader from "./ControlPanelHeader"
const ControlPanel = () => {
    return (
        <div>
            <ControlPanelHeader/>
            <h2>control panel</h2>
            
        </div>
    )
}

export default ControlPanel
