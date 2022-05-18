import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className='app'>
      <Header />
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
        <Footer />
    </div>
  );
}

export default App;
