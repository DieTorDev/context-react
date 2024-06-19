import { useState } from 'react';
import { UsersContext } from '../contexts/UsersContext';

const UsersProvider = ({ children }) => {
	const [activeUser, setActiveUser] = useState(0);

	return (
		<UsersContext.Provider
			value={[activeUser, setActiveUser]}
		></UsersContext.Provider>
	);
};

export default UsersProvider;
