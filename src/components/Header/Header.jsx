import { useContext } from 'react';
import { StyledHeader } from './header.styles';
import { UsersContext } from '../../contexts/UsersContext';

const Header = () => {
	const { activeUser } = useContext(UsersContext);
	console.log(activeUser);

	return (
		<StyledHeader>
			<h1>USERS</h1>
			<h2>User Active: {activeUser}</h2>
		</StyledHeader>
	);
};

export default Header;
