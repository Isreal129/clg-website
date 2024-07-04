import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import Events from './components/Events';
import './App.css'; // Import your CSS file

const App = () => (
    <Router>
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/departments" activeClassName="active">Departments</NavLink></li>
                    <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} /> {/* Default route for Home */}
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </div>
    </Router>
);

export default App;
