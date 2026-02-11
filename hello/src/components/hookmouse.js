import React, { useEffect } from 'react'

function Hookmouse() {
    const [x, setx] = React.useState(0)
    const [y, sety] = React.useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition called')
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>
            Hooks x-{x} y-{y}
        </div>
    )
}

export default Hookmouse
