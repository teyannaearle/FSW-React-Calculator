import React, { Component } from 'react'

export class Screen extends Component {
    render() {
        return (
            <div className="screen">
                {this.props.display}
            </div>
        )
    }
}

export default Screen
