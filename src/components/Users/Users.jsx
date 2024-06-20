import { useContext } from 'react';
import { USERS } from '../../constants/users-data';
import { StyledUserCard, StyledUsersContainer } from './users.styles';
import { UsersContext } from '../../contexts/UsersContext';

const Users = () => {
	const { setActiveUser } = useContext(UsersContext);
	console.log(setActiveUser);

	return (
		<StyledUsersContainer>
			{USERS.map(user => (
				<StyledUserCard key={user.id}>
					<img src={user.image} alt={user.name} />
					<div>
						<h2>
							{user.name} <span>{user.age}</span>
						</h2>
					</div>
					<p>{user.email}</p>
					<button onClick={() => setActiveUser(user.name)}>Active</button>
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
