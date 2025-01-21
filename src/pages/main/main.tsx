import clsx from 'clsx';
import s from './main.module.scss';
import {
	Footer,
	Header,
	PhoneSection,
	StartSection,
	TokenSection,
} from '../../component';

export function Main() {
	return (
		<>
			<Header />
			<main>
				<StartSection />
				<PhoneSection />
				<TokenSection />
			</main>
			<Footer />
		</>
	);
}
