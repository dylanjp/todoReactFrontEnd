class AuthenticationService {
    //Upon log in it saves the user in the sessionStorage
    registerSuccessfulLogin(username,password){
        console.log('Authentication was Successful');
        sessionStorage.setItem('authenticatedUser', username);
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
}

export default new AuthenticationService()