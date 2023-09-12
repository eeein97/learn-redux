import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo, toggletodo } from '../modules/todos';
import Todos from './Todos';

function TodosContainer(props) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    //dispatch({액션객체}) 액션객체생성함수 ---> return action
    const onCreate = text => dispatch(addtodo(text));
    const onToggle = id => dispatch(toggletodo(id));
    const onRemove = id => dispatch(deletetodo(id));
    return (
        <div>
            <Todos todos={todos} 
            onCreate={onCreate}
            onToggle={onToggle} 
            onRemove={onRemove}
            />
        </div>
    );
}

export default TodosContainer;