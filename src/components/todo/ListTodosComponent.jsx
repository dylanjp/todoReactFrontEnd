import React, {Component} from 'react'
import TodoDataService from '../../API/TODO/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos :[],
            message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }



    //Actually putting the component on the browser, it is called mounting
    componentDidMount() {
      this.refreshTodos();
        
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName();
        //We need to import the AuthenticationService to get the name to pass to the backend
        TodoDataService.getAllTodos(username)
        .then(
            response => {
                //console.log(response)
                this.setState({todos : response.data})
            }
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();
        //console.log(id + " ", username);
        TodoDataService.deleteTodos(username, id)
        .then(
            response => {
                this.setState({message : `The todo ${id} was deleted FOREVER`})
                this.refreshTodos();
            }
        )
    }

    updateTodoClicked(id) {
        console.log('updateClicked')
        this.props.history.push(`/todos/${id}`)
    }

    render(){
        return( 
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Compeleted?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            )}
}

export default ListTodosComponent