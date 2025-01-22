import image from './assets/backtound.jpg';
import phoneImg from './assets/phone.png';
import one from './assets/one.jpg';
import two from './assets/two.jpg';
import tree from './assets/tree.jpg';
import four from './assets/four.jpg';
import s from './phone-section.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface ISection {
	scroll: number;
}

export function PhoneSection({ scroll }: ISection) {
	const [navItems, setNavItems] = useState<string[]>([
		'Play',
		'Win',
		'Upgrade',
		'Earn',
	]);
	const [activeNav, setActiveNav] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scroll <= 1240) {
			setActiveNav(0);
			// if(ref.current)
			// 	ref.current.style.height = `1191px`
		}
		if (scroll >= 1240) {
			setActiveNav(1);
			// if(ref.current)
			// 	ref.current.style.height = `1191px`
		}
		if (scroll >= 1300) {
			setActiveNav(2);
			// if(ref.current)
			// 	ref.current.style.height = `1231px`
		}
		if (scroll >= 1360) {
			setActiveNav(3);
			// if(ref.current)
			// 	ref.current.style.height = `1271px`
		}
	}, [scroll]);

	return (
		<div className={s.container} ref={ref}>
			<img src={image} className={s.backtound} />
			<div className={s.body}>
				<h2>REVOLUTION OF TELEGRAM GAMES</h2>
				<ul>
					{navItems.map((item, index) => (
						<li key={`nav_${index}`}>
							<button
								className={`${index == activeNav && s.active}`}
								onClick={() => setActiveNav(index)}>
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
								<img src={one} />
							</div>
							<div className={s.cascade_doublee}>
								<div className={clsx(s.cascade, activeNav > 0 && s.active)}>
									<div className={s.cascade_main}>
										<img src={two} />
									</div>
									<div className={s.cascade_doublee}>
										<div className={clsx(s.cascade, activeNav > 1 && s.active)}>
											<div className={s.cascade_main}>
												<img src={tree} />
											</div>
											<div className={s.cascade_doublee}>
												<div
													className={clsx(
														s.cascade,
														activeNav > 2 && s.active
													)}>
													<div className={s.cascade_main}>
														<img src={four} />
													</div>
													<div className={s.cascade_doublee}></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<img src={phoneImg} className={s.pattern_phone} />
					</div>
				</div>
			</div>
		</div>
	);
}
