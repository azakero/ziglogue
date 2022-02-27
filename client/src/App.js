import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import PhoneListContainer from './components/PhoneListContainer/PhoneListContainer';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

const App = () => {
	return (
		<div className={styles.container}>

			<Router>
				<Header />

				<Routes>
					<Route exact path="/" element={<PhoneListContainer />} />
					<Route exact path="/:titleSlug" element={<PhoneDetail />} />
				</Routes>
			</Router>

		</div >
	);
}

export default App;
