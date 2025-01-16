import s from './footer.module.scss';

export function Footer(){
	return(
		<footer>
			<div className={s.container}>
				<div className={s.top}>
					<>logo</>
					<a className={s.play}>Play now</a>
				</div>
				<div className={s.bottom}>
					<div className={s.contact}>
						<div className={s.contact_block}>
							<p>Email</p>
							<a href="">hello@relume.io</a>
						</div>
						<div className={s.contact_block}>
							<p>Phone</p>
							<a href="">+1 (555) 000-0000</a>
						</div>
					</div>
					<p>© 2024 DragRacing. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}