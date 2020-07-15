import axios from 'axios'

class TodoDataService{
    getAllTodos(name){
        console.log('excuted get all')
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        console.log('excuted service RetrieveTodo')
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodos(name, id){
        console.log('excuted Delete')
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodos(name, id, todo){
        console.log('excuted update')
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo){
        console.log('excuted update')
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }


}

export default new TodoDataService()