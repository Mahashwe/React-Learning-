import React from 'react'

function Error({ heroname }) {
    if (heroname == 'joker') {
        throw new Error('Not a hero!')
    }
    return (
        <div>{heroname}
        </div>
    )
}

export default Error
