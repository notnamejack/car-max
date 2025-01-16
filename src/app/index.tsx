import clsx from 'clsx';
import s from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
};
