import clsx from 'clsx';
import s from './main.module.scss';
import { Footer, Header, StartSection } from '../../component';

export function Main() {
	return (
		<>
			<Header />
			<main>
				<StartSection />
			</main>
			<Footer />
		</>
	);
}
