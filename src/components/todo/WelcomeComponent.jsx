import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    render(){
        return(
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}! You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>


        )
    }
}

export default WelcomeComponent