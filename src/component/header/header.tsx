import s from './header.module.scss';

export function Header() {
	return (
		<header>
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
				</nav>
			</div>
		</header>
	);
}
