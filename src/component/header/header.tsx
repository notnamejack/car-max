import { useEffect, useState } from 'react';
import s from './header.module.scss';
import clsx from 'clsx';

export function Header() {

	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
	},[open])


	return (
		<header className={clsx(open && s.active)}>
			<div className={s.container}>
				<img src='image/logo.svg' alt='logo' />
				<nav>
					<ul>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Guide</button>
						</li>
						<li>
							<button>Roadmap</button>
						</li>
						<li>
							<button>Tokenomics</button>
						</li>
						<li>
							<button>QA</button>
						</li>
					</ul>
					<a className={s.play} href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'>
							<g clip-path='url(#clip0_3848_25)'>
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

					<button className={s.burger} onClick={() => setOpen(!open)}>
						{!open ?
						<svg xmlns="http://www.w3.org/2000/svg" width="23" height="11" viewBox="0 0 23 11" fill="none">
							<rect x="7.66699" y="0.0668945" width="15.3333" height="3.06667" rx="1.53333" fill="white"/>
							<rect y="7.7334" width="23" height="3.06667" rx="1.53333" fill="white"/>
						</svg>
						:
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
							<rect x="0.597656" y="16.6333" width="23" height="3" rx="1.5" transform="rotate(-45 0.597656 16.6333)" fill="white"/>
							<rect x="2.73633" y="0.112793" width="23" height="3.06667" rx="1.53333" transform="rotate(45 2.73633 0.112793)" fill="white"/>
						</svg>}
					</button>
				</nav>
				<div className={s.mobile}>
					<a className={s.play} href='#'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'>
							<g clip-path='url(#clip0_3848_25)'>
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
			</div>
			<div className={s.dop_menu}>
				<nav>
					<ul>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Guide</button>
						</li>
						<li>
							<button>Roadmap</button>
						</li>
						<li>
							<button>Tokenomics</button>
						</li>
						<li>
							<button>QA</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
