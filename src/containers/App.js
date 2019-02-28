import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {//początkowy stan aplikacji
            data: [{
                id: 1,
                    text: 'clean room'
            }, {
                id: 2,
                    text: 'wash the dishes'
            }, {
                id: 3,
                    text: 'feed my cat'
            }],
            title: 'Things to do: '
            //jak podać liczbę zadań
        };
    }
    addTodo(val){//metoda dodająca nowe elementy do kolekcji
        const todo = {
            text: val,
            id: uuid.v4(),//tworzenie unikatowej kombinację cyfr i liczb
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {//matoda obługująca usuwanie rzeczy do zrobienia
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {//metoda wyświetlajaca całą aplikację
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} numberOfTasks={this.state.data.length} />
                <TodoList items={this.state.data} remove={this.removeTodo.bind(this)}  />
            </div>
        );
    }
}

export default hot(module) (App);