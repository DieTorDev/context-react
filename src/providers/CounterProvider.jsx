import { useState } from 'react';
import { UsersContext } from '../contexts/UsersContext';

const UsersProvider = ({ children }) => {
	const [activeUser, setActiveUser] = useState('none');

	return (
		<UsersContext.Provider value={{ activeUser, setActiveUser }}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
