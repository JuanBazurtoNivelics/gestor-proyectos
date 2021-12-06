import React from 'react'
import './style.css'
const FormModal =({children,modalState,changeState})=>{
    const handleState = ()=>{
        console.log('cerrar')
        changeState = !modalState
    }
    return (
        <div>
            {modalState &&
            <div className = "overlay">
                <div className = "modal-container">
                        <div className = "modal-header">
                            <h3>Agregar nuevo desarrollador</h3>
                        </div>
                        <button className = "close-button" onClick = {handleState()}>X
                        </button>
                        {children}
                </div>
            </div>
    }       
        </div>
    )
}

export default FormModal;
