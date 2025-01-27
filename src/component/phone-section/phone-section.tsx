import phoneImg from './assets/phone.webp';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import tree from './assets/tree.jpg';
import four from './assets/four.jpg';
import backtound from './assets/backtound.webp';
import backtoundMin from './assets/backtound-min.webp';
import s from './phone-section.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ISection {
	scroll: number;
}

export function PhoneSection({ scroll }: ISection) {
	const navItems = ['Play', 'Win', 'Upgrade', 'Earn'];
	const [activeNav, setActiveNav] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener('resize', changeWigth);
		return () => {
			window.removeEventListener('resize', changeWigth);
		};
	}, []);

	const changeWigth = () => {
		if (window.document.documentElement.clientWidth <= 500) setIsMobile(true);
		else setIsMobile(false);
	};

	useEffect(() => {
		if (scroll <= 1200) {
			setActiveNav(0);
		}
		if (scroll >= 1300) {
			setActiveNav(1);
		}
		if (scroll >= 1700) {
			setActiveNav(2);
		}
		if (scroll >= 2100) {
			setActiveNav(3);
		}
	}, [scroll]);

	const handlerToSckroll = (nav: number) => {
		if(nav == 0)
			window.scrollTo(0, 12000)
		if(nav == 1)
			window.scrollTo(0, 1300)
		if(nav == 2)
			window.scrollTo(0, 1700)
		if(nav == 3)
			window.scrollTo(0, 2100)
	}

	return (
		<div className={s.container} ref={ref}>
			<div className={s.container_transform}>
				<div
					style={{
						backgroundImage: `url(${!isMobile ? backtound : backtoundMin})`,
					}}
					className={s.backtound}></div>
				<div className={s.body}>
					<h2>REVOLUTION OF TELEGRAM GAMES</h2>
					<ul>
						{navItems.map((item, index) => (
							<li key={`nav_${index}`}>
								<button
									className={`${index == activeNav && s.active}`}
									onClick={() => handlerToSckroll(index)}>
									{item}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className={s.container_phone}>
					<div className={s.phone}>
						<div className={s.phone_blur}></div>
						<div className={s.pattern_items}>
							<div className={s.cascade}>
								<div className={s.cascade_main}>
									<img src={one} alt='one' />
								</div>
								<div className={s.cascade_doublee}>
									<div className={clsx(s.cascade, activeNav > 0 && s.active)}>
										<div className={s.cascade_main}>
											<img src={two} alt='two' />
										</div>
										<div className={s.cascade_doublee}>
											<div
												className={clsx(s.cascade, activeNav > 1 && s.active)}>
												<div className={s.cascade_main}>
													<img src={tree} alt='tree' />
												</div>
												<div className={s.cascade_doublee}>
													<div
														className={clsx(
															s.cascade,
															activeNav > 2 && s.active
														)}>
														<div className={s.cascade_main}>
															<img src={four} alt='four' />
														</div>
														<div className={s.cascade_doublee}></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<img src={phoneImg} className={s.pattern_phone} alt='phone' />
						</div>
					</div>
				</div>
			</div>
			<div className={s.contain}></div>
		</div>
	);
}
