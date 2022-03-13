import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import PhoneListContainer from './components/PhoneListContainer/PhoneListContainer';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

const App: React.FC = () => {
	return (
		<div className={ styles.container }>

			<Router>
				<Header />

				<Routes>
					<Route path="/" element={ <PhoneListContainer /> as JSX.Element } />
					<Route path="/:titleSlug" element={ <PhoneDetail /> as JSX.Element } />
				</Routes>
			</Router>

		</div >
	);
};

export default App;
