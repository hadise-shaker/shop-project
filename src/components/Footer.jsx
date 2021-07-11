import React from 'react'

const Footer = ( {cildren}) => {
    return (
        <div style={{backgroundColor:"pink",width:"100%",height:"100px",bottom:"0"}}>
            <h1 style={{textAlign:"center"}}> Footer</h1>
            {cildren}
        </div>
    )
}

export default Footer
