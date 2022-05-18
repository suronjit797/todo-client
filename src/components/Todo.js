import React, { useState } from 'react';
import TodoBody from './TodoBody';
import TodoHeder from './TodoHeder';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    return (
        <div>
            <TodoHeder loading={loading} setLoading={setLoading} />
            <hr className='my-5' />

            <TodoBody />

        </div>
    );
};

export default Todo;