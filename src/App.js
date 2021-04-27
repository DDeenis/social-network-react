import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
// import Profile from './components/Profile/Profile'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Users from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/LoginPage/LoginPage';

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
          <Switch>
            <Route path='/profile/:id'>
              <ProfileContainer />
            </Route>

            <Route path='/dialogs'>
              <Dialogs />
            </Route>

            <Route path='/users/:page'>
              <Users />
            </Route>

            <Route to='/login'>
              <LoginPage />
            </Route>

            <Route path='/'>
              <Redirect to='/dialogs' />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
