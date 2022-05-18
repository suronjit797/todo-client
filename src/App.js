import { Route, Routes } from 'react-router-dom'


import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
