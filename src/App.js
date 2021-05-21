import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<>
			<main>
				<Container>
					<Header />
					<HomeScreen />
				</Container>
			</main>
		</>
	);
}

export default App;
