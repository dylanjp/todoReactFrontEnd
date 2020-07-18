import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(event.target.value);
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
            )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             [event.target.name]
    //             :event.target.value
    //         }
    //         )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    loginClicked(){
        //hardcoded
        // if(this.state.username === 'Rozzy' && this.state.password ==='dummy'){
        //     //Session Storage
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);

        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     console.log('Success')
        //     //this.setState({showSuccessMessage:true})
        //     //this.setState({hasLoginFailed:false})
        // }else{
        //     console.log('Yousuck')
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }   

       AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
       .then(
        () => {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        }
       ).catch( () => {
        console.log('Yousuck')
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
       }
      
       )
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* <LoginSucess showSuccessMessage={this.state.showSuccessMessage}/> */}
                    Username: <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="button" onClick={this.loginClicked}>Login</button>
                </div>
           </div>
        )
    }
}

export default LoginComponent