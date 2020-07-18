import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        return axios.get('http://localhost:8080/basicauth', {headers: {authorization: basicAuthHeader}})
    }

    //Upon log in it saves the user in the sessionStorage
    registerSuccessfulLogin(username,password){

        let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);


        console.log('Authentication was Successful');
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    //Logs the user out
    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    //checks to see if user is logged in or not
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    //get the username of user
    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    //Intercepter, intercepts request to attach the auth headers
    setupAxiosInterceptors(basicAuthHeader) {
       
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()