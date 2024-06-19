import UsersProvider from './providers/CounterProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<UsersProvider>
			<GlobalStyles />
		</UsersProvider>
	);
};

export default App;
