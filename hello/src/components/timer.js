import React, { useEffect } from 'react'

function Timer() {
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div>{count}</div>
    )
}

export default Timer
