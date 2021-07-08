import React, { useContext, useState } from "react";

import { ModalContext } from "../context/modalContext";
const Form = () => {
    const { modal, handleModal, modalContent } = useContext(ModalContext);
    return (
        <div>
          
                    <label for="fname">First name:</label><br></br>
                    <input type="text" id="fname" name="fname" value="John"/><br></br>
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value="Doe"/><br><br></br></br>
                    <input type="submit" value="Submit"/>
                    <button
                        onClick={() => {
                        
                        handleModal();
                        }}
                        >
                    Yes
            </button>
      <button
        onClick={() => {
          handleModal();
        }}
      >
        No
      </button>

        </div>
    )
}

export default Form
