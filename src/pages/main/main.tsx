import {
	Footer,
	Header,
	PhoneSection,
	StartSection,
	TokenSection,
} from '../../component';
import { useEffect, useState } from 'react';

export function Main() {
	const [scroll, setScroll] = useState<number>(0);

	useEffect(() => {
		window.addEventListener('scroll', changeScroll);
		return () => {
			window.removeEventListener('scroll', changeScroll);
		};
	}, []);

	const changeScroll = () => {
		setScroll(window.scrollY);
	};

	return (
		<>
			<Header />
			<main>
				<StartSection />
				<PhoneSection scroll={scroll} />
				<TokenSection scroll={scroll} />
			</main>
			<Footer />
		</>
	);
}
