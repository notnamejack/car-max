import { useEffect, useState } from 'react';
import s from './start-section.module.scss';

export function StartSection() {
	const [isMobile, setIsMobile] = useState(false);

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

	return (
		<div className={s.container}>
			<video className={s.video} autoPlay loop muted playsInline>
				<source src='./video/top.mp4' type='video/mp4' />
			</video>
			<div className={s.block_title}>
				<div className={s.mobile}>
					<a className={s.play} href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'>
							<g clipPath='url(#clip0_3848_25)'>
								<path
									d='M2.00156 4.2402C2.00156 2.7006 3.66823 1.73835 5.00156 2.50815L13.2641 7.27852C14.5974 8.04832 14.5974 9.97282 13.2641 10.7426L5.00157 15.513C3.66823 16.2828 2.00156 15.3205 2.00156 13.7809L2.00156 4.2402Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0_3848_25'>
									<rect
										width='16'
										height='16'
										fill='white'
										transform='translate(0 0.5)'
									/>
								</clipPath>
							</defs>
						</svg>
						Play now
					</a>
				</div>
				<h1>Online drag racing</h1>
				<p>
					Play, enjoy, and earn money in our Telegram web3 racing game. Stay
					ahead in life and in our game.
				</p>
			</div>
		</div>
	);
}
