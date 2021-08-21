import firebase from 'firebase/app'
import 'firebase/auth'

import SignIn from 'features/Auth/pages/SignIn'
import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import NotFound from './components/NotFound'

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'))

// Configure Firebase.
const config = {
	apiKey: 'AIzaSyDVJbkUzgMe6RvvlwHZEwO1TE-6itMwKlY',
	authDomain: 'photo-app-9b15b.firebaseapp.com',
}
firebase.initializeApp(config)

function App() {
	// handle firebase auth change
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
			if (!user) {
				console.log('User is not login')
				return
			}

			console.log('User login: ', user)
		})
		return () => unregisterAuthObserver()
	}, [])

	return (
		<div className="photo-app">
			<Suspense fallback={<div>Loading ...</div>}>
				<BrowserRouter>
					<Header />

					<Switch>
						<Redirect exact from="/" to="/photos" />
						<Route path="/sign-in" component={SignIn} />
						<Route path="/photos" component={Photo} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App
