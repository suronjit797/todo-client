import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init'
import { Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import FirebaseErrorMsg from './firebaseErrorMsg';


const RequireAuth = ({ children }) => {
    // fire base
    const [user, loading, error] = useAuthState(auth);
    // location
    let location = useLocation();

    // error message
    if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: FirebaseErrorMsg(error.message)
        })
    }



    // loading spinner
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }



    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;