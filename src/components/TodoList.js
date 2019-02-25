import React from 'react';

class TodoList extends React.Component {
  render() {
    const taskList = this.props.items.map(item => {

      return (
        <li key={item.id} onClick={() => props.remove(item.id)}> 
          {item.text}
        </li>
      )
    });

    return (
      <div>
        <ul className="task-list">
          {taskList}
        </ul>
      </div>
    )
  }
}

export default TodoList;
