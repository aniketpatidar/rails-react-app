import { useState } from 'react'
import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return <>
    <div className="app">
      <h1>Hello World!</h1>
      <p>React on Rails Blog.</p>
      <PostsList />
    </div>
  </>;
}

export default App
