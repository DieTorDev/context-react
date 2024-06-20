import styled from 'styled-components';

const StyledUsersContainer = styled.main`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 40px;
	padding: 40px;
`;

const StyledUserCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export { StyledUsersContainer, StyledUserCard };
