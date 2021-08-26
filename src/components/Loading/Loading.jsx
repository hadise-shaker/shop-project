import React from 'react'
import loading from "../../assets/img/loading.svg"
const Loading = () => {
    return (

       <div style={{display:"flex"}}>
           <img src={loading} style={{ width: "25%",margin:"auto" }} alt=""/>
        </div>

    )
}

export default Loading
