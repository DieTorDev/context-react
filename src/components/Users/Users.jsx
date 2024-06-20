import { useContext } from 'react';
import { USERS } from '../../constants/users-data';
import {
	StyledButton,
	StyledUserCard,
	StyledUserImg,
	StyledUsersContainer
} from './users.styles';
import { UsersContext } from '../../contexts/UsersContext';

const Users = () => {
	const { activeUser, setActiveUser } = useContext(UsersContext);

	return (
		<StyledUsersContainer>
			{USERS.map(user => (
				<StyledUserCard key={user.id}>
					<StyledUserImg src={user.image} alt={user.name} />
					<div>
						<h2>
							{user.name} <span>{user.age}</span>
						</h2>
					</div>
					<p>{user.email}</p>
					<StyledButton
						disabled={user.name === activeUser}
						onClick={() => setActiveUser(user.name)}
					>
						Active
					</StyledButton>
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
