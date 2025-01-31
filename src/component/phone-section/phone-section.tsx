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
		if (scroll > 1000 && scroll < 1300
			&& navClick != 1 && navClick != 2 && navClick != 3) {
			setActiveNav(0);
			setNavClick(-1)
		}
		if (scroll > 1300 && scroll < 1700
			 && navClick != 0 && navClick != 2 && navClick != 3) {
			setActiveNav(1);
			setNavClick(-1)
		}
		if (scroll > 1700 && scroll < 2100
			&& navClick != 0 && navClick != 1 && navClick != 3) {
			console.log(true)
			console.log(navClick)
			setActiveNav(2);
			setNavClick(-1)
		}
		if (scroll > 2100
			&& navClick != 0 && navClick != 1 && navClick != 2) {
			setActiveNav(3);
			setNavClick(-1)
		}
	}, [scroll]);

	const handlerToSckroll = (nav: number) => {
		if(nav == 0){
			scrollObject.scrollTo(1100, options)
			setNavClick(0)
		}
		if(nav == 1){
			scrollObject.scrollTo(1301, options)
			setNavClick(1)
		}
		if(nav == 2){
			scrollObject.scrollTo(1701, options)
			setNavClick(2)
		}
		if(nav == 3){
			scrollObject.scrollTo(2101, options)
			setNavClick(3)
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
								<div className={clsx(s.cascade_main)}
									style={{transform: `translateY(${activeNav > 2 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2)}vh` : `-${432.511}px`) : '0px'})`,
									position: 'absolute', zIndex: 30}}>
									<img src={four} alt='four' />
								</div>
								<div className={clsx(s.cascade_main)}
									style={{transform: `translateY(${activeNav > 1 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2)}vh` : `-${432.511}px`) : '0px'})`,
									position: 'absolute', zIndex: 20}}>
									<img src={tree} alt='tree' />
								</div>
								<div className={clsx(s.cascade_main)}
									style={{transform: `translateY(${activeNav > 0 ? (!isMobile ? `-${(!isPad ? 65.8 : 64.2)}vh` : `-${432.511}px`) : '0px'})`,
									position: 'absolute', zIndex: 10}}>
									<img src={two} alt='two' />
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
