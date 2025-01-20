import s from './start-section.module.scss';

export function StartSection() {
	return (
		<div className={s.container}>
			<video className={s.video} autoPlay loop muted>
				<source src='/video/top.mp4' type='video/mp4' />
			</video>
			<div className={s.block_title}>
				<h1>Online drag racing</h1>
				<p>
					Play, enjoy, and earn money in our Telegram web3 racing game. Stay
					ahead in life and in our game.
				</p>
			</div>
		</div>
	);
}
