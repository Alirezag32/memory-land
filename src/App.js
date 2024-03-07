import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from './components/register';
import Dashboard from './components/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard />} />
        <Route path='/register' element = {<Register />}  />
        
      </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
