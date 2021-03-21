import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Nav />
        </aside>
        <Profile />
      </main>
    </div>
  );
}

export default App;
