import React from 'react'
import './style.css'
const FormModal =({children,modalState,setState})=>{
   
    return (
        <div>
            {modalState &&
            <div className = "overlay">
                <div className = "modal-container">
                        <div className = "modal-header">
                            <h3>Agregar nuevo desarrollador</h3>
                        </div>
                        <button className = "close-button" onClick = {()=>setState(false)}>X
                        </button>
                        {children}
                </div>
            </div>
    }       
        </div>
    )
}

export default FormModal;
