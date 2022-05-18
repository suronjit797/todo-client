import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js'


const TodoBody = ({ todos, setLoading }) => {

    const completeConfirm = id => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Complete',
            denyButtonText: `Don't Change`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.put(`/todo/${id}`, { complete: true })
                        .then(res => {
                            if (res.data) {
                                setLoading(true)
                                Swal.fire('Updated!', '', 'success')
                            }
                        })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
    }
    const removeConfirm = id => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Complete',
            denyButtonText: `Don't Change`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.put(`/todo/${id}`, { complete: true })
                        .then(res => {
                            if (res.data) {
                                setLoading(true)
                                Swal.fire('Saved!', '', 'success')
                            }
                        })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
    }


    return (
        <div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 align-items-stretch g-4">
                {
                    todos.map((todo, index) => (
                        <div className="col" key={todo._id} >
                            <Card className='h-100 d-flex flex-column mb-3 p-3 shadow' >
                                <div className={todo.complete ? 'text-decoration-line-through' : ''}>
                                    <h4 className='text-primary'>{index + 1}. {todo.header} </h4>
                                    <p>  {todo.description} </p>
                                </div>
                                <hr className="mt-auto" />
                                <div className="d-flex ">
                                    <button
                                        className={`btn text-capitalize me-3 ${todo.complete ? 'btn-success ' : 'btn-primary '} `}
                                        onClick={() => completeConfirm(todo._id)}
                                        disabled={todo.complete}
                                    >
                                        {todo.complete ? 'completed' : 'complete'}
                                    </button>
                                    <button
                                        className="btn btn-danger text-capitalize ms-auto"
                                        onClick={() => removeConfirm(todo._id)}
                                    > remove  </button>
                                </div>

                            </Card>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default TodoBody;