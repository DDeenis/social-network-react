import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import UserFollow from './components/Users/UserFollow/UserFollow';

function App(props) {
  const state = props.store.getState();

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Nav state={state.sidebar} />
        </aside>
        <div className="app-wapper-content">
          <Route path='/profile'>
            <Profile />
          </Route>

          <Route path='/dialogs'>
            <Dialogs />
          </Route>

          <Route path='/users'>
            <UserFollow />
          </Route>
        </div>
      </main>
    </div>
  );
}

export default App;
