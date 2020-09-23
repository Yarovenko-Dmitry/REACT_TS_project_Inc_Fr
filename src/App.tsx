import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import {LoginPage} from './components/auth/Login/LoginPage';
import {RegisterContainer} from './components/auth/Register/RegisterContainer';
import {PasswordRecovery} from './components/auth/PasswordRecovery/PasswordRecovery';
import {PasswordCreation} from './components/auth/PasswordCreation/PasswordCreation';
import {Profile} from "./components/Profile/Profile";
import Packs from './components/Main-content/Packs/Packs';
import WrongPage from './components/WrongPage';
import Cards from './components/Main-content/Cards/Cards';
import Learn from "./components/Main-content/Learn/Learn";
import {initializeAppTC} from './redux/app-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './redux/redux-store';
import {CircularProgress} from '@material-ui/core';

function App() {

  const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized);

  const dispatch = useDispatch();
  console.log('befor isInitialized ', isInitialized)
  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])
  console.log('after isInitialized ', isInitialized)

  if (!isInitialized) {
    return <div
      style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      <CircularProgress/>
    </div>
  }

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Switch>
        <Route path={'/profile/:userId?'}
               render={() => <Profile/>}/>
        <Route path={'/login'}
               render={() => <LoginPage/>}/>
        <Route path={'/register'}
               render={() => <RegisterContainer/>}/>
        <Route path={'/passwordRecovery'}
               render={() => <PasswordRecovery/>}/>
        <Route path={'/set-new-password/:token?'}
               render={() => <PasswordCreation/>}/>
        <Route path={'/packs'}
               render={() => <Packs/>}/>
        <Route path={'/сards/:id'}
               render={() => <Cards/>}/>
        <Route path={'/learn/:id'}
               render={() => <Learn/>}/>
        <Route path={'*'}
               render={() => <WrongPage/>}/>
      </Switch>
    </div>
  );
}

export default App;
