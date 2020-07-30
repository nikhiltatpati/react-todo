import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import { providers, firebaseAppAuth } from '../../firebase';

import Home from '../../containers/home';
import LogIn from '../log-in/log-in';
import Header from '../header/header';

class App extends React.Component {
	render() {
		const { user, signInWithGoogle, signOut } = this.props;
		return (
			<div className='container py-3 h-100'>
				
				{!user && <LogIn signInWithGoogle={signInWithGoogle} />}

				{user && <Header signOut={signOut} user={user} />}
				{user && <Home />}
			</div>
		);
	}
}

/** Wrap it */
export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(App);
