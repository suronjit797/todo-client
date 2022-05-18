import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';
import Footer from './components/Footer';
import RequireAuth from './components/RequireAuth';

import 'sweetalert2/dist/sweetalert2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<RequireAuth> <Todo /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
