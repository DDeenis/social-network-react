import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <aside>
            <Nav />
          </aside>
          <div className="app-wapper-content">
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
