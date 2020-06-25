import axios from 'axios'

class TodoDataService{
    getAllTodos(name){
        console.log('excuted service')
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodos(name, id){
        console.log('excuted service')
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }


}

export default new TodoDataService()