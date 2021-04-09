import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App(props) {
  const state = props.store.getState();
  const dispatch = props.store.dispatch.bind(props.store);

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Nav state={state.sidebar} />
        </aside>
        <div className="app-wapper-content">
          <Route path='/profile'>
            <Profile state={state.profile} dispatch={dispatch} />
          </Route>

          <Route path='/dialogs'>
            <Dialogs state={state.chat} dispatch={dispatch} />
          </Route>
        </div>
      </main>
    </div>
  );
}

export default App;
