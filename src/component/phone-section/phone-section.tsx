import phoneImg from './assets/phone.webp';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import tree from './assets/tree.jpg';
import four from './assets/four.jpg';
import backtound from './assets/backtound.webp';
import backtoundMin from './assets/backtound-min.webp';
import s from './phone-section.module.scss';
import { useEffect, useRef, useState } from 'react';
import Scroll from 'react-scroll';
import clsx from 'clsx';

interface ISection {
	scroll: number;
}

var scrollObject = Scroll.animateScroll;

const options = {
	duration: 300,
	smooth: true,
  };

export function PhoneSection({ scroll }: ISection) {
	const navItems = ['Play', 'Win', 'Upgrade', 'Earn'];
	const [activeNav, setActiveNav] = useState(0);
	const [navClick, setNavClick] = useState(-1);
	const [navscroll, setNavscroll] = useState(-1);
	const [activeScrool, setActiveScrool] = useState(0);
	const [isPad, setIsPad] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener('resize', changeWigth);
		return () => {
			window.removeEventListener('resize', changeWigth);
		};
	}, []);

	const changeWigth = () => {
		if (window.document.documentElement.clientWidth <= 1024) setIsPad(true);
		else setIsPad(false);
		if (window.document.documentElement.clientWidth <= 500) setIsMobile(true);
		else setIsMobile(false);
	};

	useEffect(() => {
		if (scroll <= 1200 && (navClick != activeNav)) {
			setActiveNav(0);
		}
		if (scroll >= 1300 && (navClick != activeNav)) {
			setActiveNav(1);
		}
		if (scroll >= 1700 && (navClick != activeNav)) {
			setActiveNav(2);
		}
		if (scroll >= 2100 && (navClick != activeNav)) {
			setActiveNav(3);
		}
	}, [scroll]);

	const handlerToSckroll = (nav: number) => {
		if(nav == 0){
			scrollObject.scrollTo(1100, options)
			setNavscroll(1100);
		}
		if(nav == 1){
			scrollObject.scrollTo(1300, options)
			setNavscroll(1300);
		}
		if(nav == 2){
			scrollObject.scrollTo(1700, options)
			setNavscroll(1700);
		}
		if(nav == 3){
			scrollObject.scrollTo(2100, options)
			setNavscroll(2100);
		}
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
								<div className={clsx(s.cascade_main)}>
									<img src={one} alt='one' />
								</div>
								<div className={clsx(s.cascade_main, activeNav > 0 && s.active)}
									style={{transform: `translateY(${activeNav > 0 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2) * 1}vh` : `-${432.511 * 1}px`) : '0px'})`}}>
									<img src={two} alt='two' />
								</div>
								<div className={clsx(s.cascade_main, activeNav > 1 && s.active)}
									style={{transform: `translateY(${activeNav > 1 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2) * 2}vh` : `-${432.511 * 2}px`) : '0px'})`}}>
									<img src={tree} alt='tree' />
								</div>
								<div className={clsx(s.cascade_main, activeNav > 2 && s.active)}
									style={{transform: `translateY(${activeNav > 2 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2) * 3}vh` : `-${432.511 * 3}px`) : '0px'})`}}>
									<img src={four} alt='four' />
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
