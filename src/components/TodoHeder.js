import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios'

const TodoHeder = ({ setLoading }) => {

    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')


    const handleTodo = event => {
        event.preventDefault()
        const todo = { header, description, complete: false };

        axios.post('/todo', todo)
            .then(res => {
                if (res.data.insertedId) {
                    setLoading(true)
                }
            })
    }
    return (
        <div>
            <Form onSubmit={handleTodo} className='mx-auto todoForm' >
                <label htmlFor="todo"> Todo Header </label>
                <Form.Control
                    type="text"
                    id="todo"
                    className='mb-3'
                    required
                    value={header}
                    onChange={e => setHeader(e.target.value)}
                />

                <label htmlFor="description"> Todo Description </label>
                <textarea
                    className='form-control mb-3'
                    id="description"
                    rows='4'
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <Button type='submit' variant='success' className='text-capitalize'  > Add Task </Button>
            </Form>
        </div>
    );
};

export default TodoHeder;