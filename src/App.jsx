import Header from './components/Header/Header';
import Users from './components/Users/Users';
import UsersProvider from './providers/UsersProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<UsersProvider>
			<GlobalStyles />
			<Header />
			<Users />
		</UsersProvider>
	);
};

export default App;
