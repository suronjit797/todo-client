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
        <div className='container'>
            <h1 className="text-center"> Add a todo </h1>
            <TodoHeder setLoading={setLoading} />

            {
                todos.length ? (
                    <>
                        <hr className='my-5' />
                        <h1 className="text-center mb-4"> Todo list </h1>
                        <TodoBody todos={todos} setLoading={setLoading} />
                    </>
                ) : (
                    <p className="text-danger mt-5"> No todo list found. Please add some  </p>
                )
            }

        </div>
    );
};

export default Todo;