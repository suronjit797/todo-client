import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/register.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import FirebaseErrorMsg from './firebaseErrorMsg';
import { Spinner } from 'react-bootstrap';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')



    const handleLogin = event => {



        event.preventDefault()
        if (password === cPassword) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password does not match'
            })
        }
    }


    if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: FirebaseErrorMsg(error.message)
        })
    }


    if (loading) {
        return (
            <div className="loading">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }






    return (
        <div className='form'>
            <div className="container my-5">
                <div className="form_body shadow-lg">
                    <div className="row align-items-stretch gap-0">
                        <div className="col-md-6 order-1 bg-white form_left d-none d-md-block">
                            <div className="h-100 p-5 d-flex justify-content-center align-items-center">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 order-2 form_right text-white p-5">
                            <form onSubmit={handleLogin} className='h-100 d-flex flex-column justify-content-center'>
                                <div className="mb-3">
                                    <label htmlFor="email"> Email: </label>
                                    <input
                                        type="email"
                                        id='email'
                                        value={email}
                                        placeholder='Type your email'
                                        onChange={e => setEmail(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password"> Password: </label>
                                    <input
                                        type="password"
                                        id='password'
                                        value={password}
                                        placeholder='Type your password'
                                        onChange={e => setPassword(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password"> Confirm your Password: </label>
                                    <input
                                        type="password"
                                        id='cPassword'
                                        value={cPassword}
                                        placeholder='Type your password again'
                                        onChange={e => setCPassword(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>

                                <p > Already have an account? <Link to='/login' > Login now </Link>  </p>


                                <button type='submit' className="btn btn-success w-75 mx-auto d-block rounded-pill py-2 mt-3"> Register </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;