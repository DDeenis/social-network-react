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
            <Nav state={props.state.sidebar} />
          </aside>
          <div className="app-wapper-content">
            <Route path='/profile'>
              <Profile state={props.state.profile} />
            </Route>

            <Route path='/dialogs'>
              <Dialogs state={props.state.chat} />
            </Route>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
