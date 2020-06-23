import Axios from "axios"
import axios from 'axios'

class HelloWorldService{
    excuteHelloWorldService(){
        console.log('excuted service')
        return axios.get('http://localhost:8080/helloworld')
    }

}

export default new HelloWorldService()