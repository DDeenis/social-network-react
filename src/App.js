import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import NavContainer from './components/Nav/NavContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const Users = React.lazy(() => import('./components/Users/Users'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <main>
        <aside>
          <NavContainer />
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
