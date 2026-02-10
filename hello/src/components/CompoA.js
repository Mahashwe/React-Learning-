import React, { Component } from 'react'
import CompoB from './CompoB'

class CompoA extends Component {
    render() {
        return (
            <div>
                <CompoB />
            </div>
        )
    }
}

export default CompoA
