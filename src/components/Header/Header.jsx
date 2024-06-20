import { useContext } from 'react';
import { StyledHeader } from './header.styles';
import { UsersContext } from '../../contexts/UsersContext';

const Header = () => {
	const { activeUser, setActiveUser } = useContext(UsersContext);
	const showButton = activeUser !== 'none';

	return (
		<StyledHeader>
			<h1>USERS</h1>
			<h2>User Active: {activeUser}</h2>
			{showButton && (
				<button onClick={() => setActiveUser('none')}>Turn off</button>
			)}
		</StyledHeader>
	);
};

export default Header;
