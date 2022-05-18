import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
