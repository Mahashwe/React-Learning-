import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
    return ReactDOM.createPortal(
        <div>
            <h1> NEW Portal</h1>
        </div>,
        document.getElementById('myPortal')
    )
}

export default Portal
