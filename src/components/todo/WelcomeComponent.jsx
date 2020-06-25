import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import HelloWorldService from '../../API/TODO/HelloWorldService.js'
//Look below for example connecting to backend service
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        //setting state to show Welcome message from backend
        this.state = {
            welcomeMessage : ''
        }
    }

    render(){
        return(
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}! 
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message. 
                    <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container"> 
                    {this.state.welcomeMessage}
                </div>
            </>


        )
    }

    retriveWelcomeMessage(){
        console.log("call for welcome message was sent");
        // HelloWorldService.excuteHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response) )
        // HelloWorldService.excuteHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response) )
        HelloWorldService.excuteHelloWorldPathVarService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response) )
        .catch(error => this.handleError(error) )
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})  
    }

    handleError(error) {
        console.log(error.response)
        this.setState({welcomeMessage: error.response.data.message})  
    }

}

export default WelcomeComponent