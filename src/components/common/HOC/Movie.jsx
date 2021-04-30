import React, { Component } from 'react'
import withToolTip from './withToolTip';

 class Movie extends Component {
    render() {
        return (
            <div>
                Movie
                {this.props.showToolTip&&<div>tooltip</div>}
            </div>
        )
    }
}
export default withToolTip(Movie);
