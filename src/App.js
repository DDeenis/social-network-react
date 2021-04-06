import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <aside>
            <Nav state={props.store.getState().sidebar} />
          </aside>
          <div className="app-wapper-content">
            <Route path='/profile'>
              <Profile state={props.store.getState().profile} dispatch={props.store.dispatch.bind(props.store)} />
            </Route>

            <Route path='/dialogs'>
              <Dialogs state={props.store.getState().chat} dispatch={props.store.dispatch.bind(props.store)} />
            </Route>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
