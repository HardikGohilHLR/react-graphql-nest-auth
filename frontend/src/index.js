// Main
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from './api';
import { AuthContextProvider } from './rgn-app/context/authContext';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApolloProvider client={client}>
		<AuthContextProvider>
			<Router>
				<App />
			</Router>
		</AuthContextProvider>
	</ApolloProvider>
);