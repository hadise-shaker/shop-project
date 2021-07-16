import React from 'react'
import ControlPanelHeader from "../pages/ControlPanelHeader"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
const ControlPanelLayout = ({children}) => {
    return (
        <div>
{isLoggedIn()&&     
    
<>
       <ControlPanelHeader/>
      

                 {children}
              
                 
                 </>}

</div>
           

    )
}

export default ControlPanelLayout
