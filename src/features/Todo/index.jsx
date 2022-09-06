import React, {useState} from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList=[
        {
            id:1,
            title: 'Eat',
            status:'new',
        },
        {
            id:2,
            title: 'Sleep',
            status:'completed',
        },
        {
            id:3,
            title: 'Wake',
            status:'new',
        },
    ]
    const [todoList, setTodoList]=useState(initTodoList);
    const [filteredStatus, setFilteredStatus]=useState('all');
    
    const handleTodoClick=(todo,index)=>{
        const newTodoList=[...todoList]

        console.log(todo,index)
        // toogle state

        newTodoList[index]={
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        //TodoList[index]=newTodo
        // update todo List
        setTodoList(newTodoList);
    }
    const handleShowAllClick=() => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick=() => {
        setFilteredStatus('completed');

    }
    const handleShowNewClick=() => {
        setFilteredStatus('new');

    }
    const renderedTodoList=todoList.filter(todo=>filteredStatus==='all'||filteredStatus===todo.status)
    console.log(renderedTodoList)
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}></TodoList>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;