import React from 'react';
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

function App() {

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
				    <Route path={'/cards'}
					       render={() => <Cards/>}/>
					<Route path={'*'}
					       render={() => <WrongPage/>}/>
				</Switch>
		</div>
	);
}

export default App;
