import React, { Component } from 'react'
import CompoC from './CompoC'

class CompoB extends Component {
    render() {
        return (
            <div>
                <CompoC />
            </div>
        )
    }
}

export default CompoB
