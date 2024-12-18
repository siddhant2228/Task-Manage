import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Alltask from './pages/Alltask'
import CompletedTask from './pages/CompletedTask'
import IncompletedTask from './pages/IncompletedTask'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <div className=" bg-gray-900 text-white h-screen p-2 relative">
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />}> 
        <Route index element={<Alltask />} />
        <Route path = "/home/completedTasks" element={<CompletedTask/> } />
        <Route path= "/home/incompletedTasks" element= {<IncompletedTask/> } />
        </Route>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
    </Router>
    </div>
  );
};

export default App

