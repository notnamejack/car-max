import s from './token-section.module.scss';
import { ReactComponent as Top } from './assets/top.svg';
import left from './assets/left.png';
import rigth from './assets/rigth.png';

export function TokenSection() {
	return (
		<div className={s.container}>
			<div className={s.body}>
				<div className={s.nav}>
					<ul>
						<li className={s.active}>q1</li>
						<li>q2</li>
						<li>q3</li>
						<li>q4</li>
					</ul>
					<Top />
				</div>
				<div className={s.token}>
					<div>
						<img src={left} />
					</div>
					<div></div>
					<div>
						<img src={rigth} />
					</div>
				</div>
			</div>
		</div>
	);
}
