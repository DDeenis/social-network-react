import React from 'react'
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
// import Profile from './components/Profile/Profile'
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
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div>
  );
}

export default App;
