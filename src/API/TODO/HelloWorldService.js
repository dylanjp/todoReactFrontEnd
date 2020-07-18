import axios from "axios";

class HelloWorldService {
  excuteHelloWorldService() {
    console.log("excuted service");
    return axios.get("http://localhost:8080/helloworld");
  }

  excuteHelloWorldBeanService() {
    console.log("excuted service");
    return axios.get("http://localhost:8080/helloworld-bean");
  }

  excuteHelloWorldPathVarService(name) {
   console.log('executed service')
        // let username = 'Rozzy'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);

        // console.log(basicAuthHeader)
        return axios.get(`http://localhost:8080/helloworld/path-variable/${name}`
        // , 
        //         {
        //             headers : {
        //                 authorization: basicAuthHeader
        //             }
        //         }
        );
    }
}

export default new HelloWorldService();
