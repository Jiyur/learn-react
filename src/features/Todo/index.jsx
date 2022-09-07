import React, {useState} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import TodoList from './components/TodoList';
import queryString from 'query-string'
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
    const location=useLocation()
    const history=useNavigate()
    const [todoList, setTodoList]=useState(initTodoList);
    const [filteredStatus, setFilteredStatus]=useState(()=>{
        const params=queryString.parse(location.search);
        return params.status
    });
    
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
        const queryParams={status: 'all'};
        history({
            search: `?status=${queryParams.status}`
        })
    }
    const handleShowCompletedClick=() => {
        setFilteredStatus('completed');
        const queryParams={status: 'completed'};
        history({
            search: `?status=${queryParams.status}`
        })
       
    }
    const handleShowNewClick=() => {
        setFilteredStatus('new');
        const queryParams={status: 'new'};
        history({
            search: `?status=${queryParams.status}`
        })
      

    }
    const renderedTodoList=todoList.filter(todo=>filteredStatus==='all'||filteredStatus===todo.status)
    console.log(renderedTodoList)
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList } onTodoClick={handleTodoClick}></TodoList>
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;