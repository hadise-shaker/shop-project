import React from 'react'
import Proptypes from "prop-types";
const Button = ({buttonLable, classes , onClick})=>{

    return(
            <button  onClick={()=> onClick("test")} className={`btn ${classes}`} /* style= {{backgroundColor: classes}} */>{
                buttonLable}
                </button>
    )
}
Button.propTypes = {
    buttonLable: Proptypes.string,
    classes : Proptypes.string,
   /*  btncolor : Proptypes.string, */
    onClick : Proptypes.func,
}
export default Button