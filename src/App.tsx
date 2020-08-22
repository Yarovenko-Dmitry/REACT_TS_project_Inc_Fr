import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {ButtonCancel, ButtonSelect} from './components/common/Button/Button';
import {Route} from 'react-router-dom';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {LoginPage} from './components/auth/Login/LoginPage';
import {RegisterContainer} from './components/auth/Register/RegisterContainer';
import {PasswordRecovery} from './components/auth/PasswordRecovery/PasswordRecovery';
import {PasswordCreation} from './components/auth/PasswordCreation/PasswordCreation';

function App() {
  return (
    <div className="App">
      hello world
      <Navbar/>
      <ButtonSelect/>
      <ButtonCancel/>

      <Route path={'/profile/:userId?'}
             render={() => <ProfileContainer/>}/>
      <Route path={'/login'}
             render={() => <LoginPage/>}/>
      <Route path={'/register'}
             render={() => <RegisterContainer/>}/>
      <Route path={'/passwordRecovery'}
             render={() => <PasswordRecovery/>}/>
      <Route path={'/passwordCreation'}
             render={() => <PasswordCreation/>}/>

    </div>
  );
}

export default App;