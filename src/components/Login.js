import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import img from '../images/login.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import firebaseErrorMsg from './firebaseErrorMsg'
import { Spinner } from 'react-bootstrap';


const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [from, user, navigate])


    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: firebaseErrorMsg(error.message)
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

                                <p > Dont have an account? <Link to='/register' > Register now </Link>  </p>

                                <button type='submit' className="btn btn-success w-75 mx-auto d-block rounded-pill py-2 mt-3"> Login </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;