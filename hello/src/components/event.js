import React, { Component } from 'react'

class Event extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    clickhandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default Event
