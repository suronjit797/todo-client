import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = e => {
        e.preventDefault()
        signOut(auth)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} className='fw-bold' to="/">Todo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Todo</Nav.Link>
                        {
                            user ? (
                                <Nav.Link as={NavLink} className='text-danger' onClick={handleSignOut} to="/">Sign out</Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;