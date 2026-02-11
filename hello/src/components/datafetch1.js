import React, { useEffect } from 'react'
import axios from 'axios'

function Data() {
    const [loading, setloading] = React.useState(true)
    const [post, setpost] = React.useState({})
    const [error, seterror] = React.useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setloading(false)
                setpost(response.data)
                seterror('')
            })
            .catch(error => {
                setloading(false)
                setpost({})
                seterror('Something went wrong')
            })
    }, [])
    return (
        <div>
            {loading ? "Loading..." : post.title}
            {error ? error : null}

        </div>
    )
}

export default Data
