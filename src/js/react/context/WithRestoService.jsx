import React from 'react';
import { RestoServiceContext } from './RestoServiceContext.jsx';

export const WithRestoService = () => (Wrapped) => {
	return (props) => (
		<RestoServiceContext.Consumer>
			{
				(RestoService) => (<Wrapped
					{...props}
					RestoService={RestoService}
				/>)
			}
		</RestoServiceContext.Consumer>
	);
};