import s from './footer.module.scss';

export function Footer() {
	return (
		<footer>
			<div className={s.container}>
				<div className={s.top}>
					<img src='image/logo.svg' alt='logo' />
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
				<div className={s.bottom}>
					<div className={s.contact}>
						<div className={s.contact_block}>
							<p>Email</p>
							<a href=''>hello@relume.io</a>
						</div>
						<div className={s.contact_block}>
							<p>Phone</p>
							<a href=''>+1 (555) 000-0000</a>
						</div>
					</div>
					<p>© 2024 DragRacing. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
