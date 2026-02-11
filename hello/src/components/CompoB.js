import React, { useContext } from 'react'
import CompoC from './CompoC'
import { user, channel } from '../App'

function CompoB() {
    const userName = useContext(user)
    const channelName = useContext(channel)
    return (
        <div>
            {userName} - {channelName}
        </div>
    )
}

export default CompoB
