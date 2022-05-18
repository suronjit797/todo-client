import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import TodoBody from './TodoBody';
import TodoHeder from './TodoHeder';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('/todo')
            .then(res => {
                setTodos(res.data)
                setLoading(false)
            })
    }, [loading])


    if (loading) {
        return (
            <div className="loading">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }


    return (
        <div>
            <TodoHeder setLoading={setLoading} />
            <hr className='my-5' />

            <TodoBody todos={todos} setLoading={setLoading}  />

        </div>
    );
};

export default Todo;