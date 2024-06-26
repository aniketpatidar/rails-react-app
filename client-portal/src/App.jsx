import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
// import PostsList from './features/posts/PostsList';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Hello World!</h1>
        <p>React on Rails Blog.</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App
