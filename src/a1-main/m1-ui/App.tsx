import React from 'react';
import './App.css';
import {ButtonCancel, ButtonSelect} from './u1-common/Button/Button';
import { Route } from 'react-router-dom';
import {ProfileContainer} from './u2-components/Profile/ProfileContainer';
import {LoginPage} from './u3-Routes/r1-auth/a1-login/LoginPage';
import {RegisterContainer} from './u3-Routes/r1-auth/a2-register/RegisterContainer';
import {PasswordRecovery} from './u3-Routes/r1-auth/a3-passwordRecovery/PasswordRecovery';
import {PasswordCreation} from './u3-Routes/r1-auth/a4-passwordCreation/PasswordCreation';
import Navbar from './u2-components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     hello world
      {/*<c1-Header/>*/}
      {/*<Main/>*/}
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
