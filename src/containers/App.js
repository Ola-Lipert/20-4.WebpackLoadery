import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {//początkowy stan aplikacji
            data: [],
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
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;