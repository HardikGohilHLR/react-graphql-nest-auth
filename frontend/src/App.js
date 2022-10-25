// App
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_USER } from './api/queries';

import RGNApp from './rgn-app';
import { useAuthUpdateContext } from './rgn-app/context/authContext';

const App = () => {

    const dispatch = useAuthUpdateContext();
	const { data } = useQuery(GET_USER);

	useEffect(() => {
		if(data) {
			dispatch({type: 'SET_USER', payload: data.getUser});			
		}
	}, [data]);	

    return (
		<React.Fragment>

			<RGNApp /> 

		</React.Fragment>
    )
}

export default App;