import image from './assets/backtound.jpg';
import phoneImg from './assets/phone.png';
import one from './assets/one.jpg';
import s from './phone-section.module.scss';

export function PhoneSection() {
	return (
		<div className={s.container}>
			<img src={image} className={s.backtound} />
			<div className={s.body}>
				<h2>REVOLUTION OF TELEGRAM GAMES</h2>
				<ul>
					<li>
						<button className={s.active}>Play</button>
					</li>
					<li>
						<button>Win</button>
					</li>
					<li>
						<button>Upgrade</button>
					</li>
					<li>
						<button>Earn</button>
					</li>
				</ul>
			</div>
			<div className={s.container_phone}>
				<div className={s.phone}>
					<div className={s.phone_blur}></div>
					<div className={s.pattern_items}>
						<ul>
							<li>
								<img src={one} alt='' />
							</li>
						</ul>
						<img src={phoneImg} className={s.pattern_phone} />
					</div>
				</div>
			</div>
		</div>
	);
}
