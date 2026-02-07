import React from 'react'
import styles from './style_learn.module.css'


// function Style_learn() {
//     return (
//         <div>
//             <h1 style={{ color: 'blue', fontSize: '40px' }}>Inline Styling</h1>
//         </div>
//     )
// }

function Style_learn() {
    return (
        <div>
            <h1 className={styles.heading}>CSS Modules</h1>
            <button className={styles.button}>Click</button>
        </div>
    )
}
export default Style_learn
