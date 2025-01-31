import s from './token-section.module.scss';
import clsx from 'clsx';
import { ReactComponent as Top } from './assets/top.svg';
import left from './assets/left.png';
import leftMin from './assets/left-min.png';
import rigth from './assets/rigth.png';
import rigthMin from './assets/rigth-min.png';
import token from './assets/token.png';
import tokenMin from './assets/token-min.png';
import tokenMobile from './assets/token-mobile.png';
import { useEffect, useState } from 'react';
import Scroll from 'react-scroll';

interface ISection {
	scroll: number;
}

var scrollObject = Scroll.animateScroll;

const options = {
	duration: 300,
	smooth: true,
};

export function TokenSection({ scroll }: ISection) {
	const navItems = ['q1', 'q2', 'q3', 'q4'];
	const [activeNav, setActiveNav] = useState(0);
	const [navClick, setNavClick] = useState(-1);
	const [isMobile, setIsMobile] = useState(false);
	const [isPad, setIsPad] = useState(false);
	const [speed, setSpeed] = useState<number>(-1);

	useEffect(() => {
		if (scroll > 3600 && scroll < 3800
			&& navClick != 1 && navClick != 2 && navClick != 3 && navClick != 4) {
			setActiveNav(0);
			setNavClick(-1)
		}
		if (scroll > 3800 && scroll < 4200
			&& navClick != 0 && navClick != 2 && navClick != 3 && navClick != 4) {
			setActiveNav(1);
			setNavClick(-1)
		}
		if (scroll > 4200 && scroll < 4600
			&& navClick != 0 && navClick != 1 && navClick != 3 && navClick != 4) {
			setActiveNav(2);
			setNavClick(-1)
		}
		if (scroll > 4600 && scroll < 5000
			&& navClick != 0 && navClick != 1 && navClick != 2 && navClick != 4
		) {
			setActiveNav(3);
			setNavClick(-1)
			setSpeed(-1);
		}
		if (scroll >= 5000
			&& navClick != 0 && navClick != 1 && navClick != 2 && navClick != 3
		) {
			setActiveNav(4);
			setNavClick(-1)
			if (speed == -1) setSpeed(0);
		}
	}, [scroll]);

	const handlerToSckroll = (nav: number) => {
		if(nav == 0){
			scrollObject.scrollTo(3601, options)
			setNavClick(0)
		}
		if(nav == 1){
			scrollObject.scrollTo(3801, options)
			setNavClick(1)
		}
		if(nav == 2){
			scrollObject.scrollTo(4201, options)
			setNavClick(2)
		}
		if(nav == 3){
			scrollObject.scrollTo(4601, options)
			setNavClick(3)
		}
		if(nav == 4){
			scrollObject.scrollTo(5001, options)
			setNavClick(3)
		}
	}

	useEffect(() => {
		if (speed >= 0 && speed < 100) {
			const interval = setInterval(() => {
				setSpeed(speed + 1);
			}, 15);

			return () => clearInterval(interval);
		}
	}, [speed]);

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

	return (
		<div className={s.container}>
			<div className={s.body}>
				<div className={clsx(s.nav, activeNav == 4 && s.active)}>
					<ul>
						{navItems.map((item, index) => (
							<li className={`${index == activeNav && s.active}`} key={item}>
								<button onClick={() => handlerToSckroll(index)}>{item}</button>
							</li>
						))}
					</ul>
					<Top />
				</div>
				<div className={s.token}>
					<div className={clsx(s.left, activeNav == 4 && s.active)}>
						<img src={!isMobile ? left : leftMin} alt='line' />
					</div>
					<div className={clsx(s.frame)}>
						{activeNav < 4 && (
							<div className={clsx(s.cascade)}>
								<div className={clsx(s.cascade_main, activeNav > 0 && s.show)}>
									<ul className={s.itemes}>
										<li className={s.item}>
											<h3>Запуск MVP</h3>
											<p>
												Начальная версия продукта: онлайн-игра, оффлайн-игра,
												рынок, гараж, гонки.
											</p>
										</li>
										<li className={s.item}>
											<h3>Массовый маркетинг</h3>
											<p>
												Подготовка ко 2-му раунду инвестиций и привлечение
												аудитории.
											</p>
										</li>
										<li className={s.item}>
											<h3>Тестирование</h3>
											<p>
												Проверка продукта с пользователями для выявления и
												исправления ошибок.
											</p>
										</li>
										<li className={s.item}>
											<h3>Карьерный режим</h3>
											<p>
												Добавление карьерного режима для вовлечения и
												долгосрочной мотивации.
											</p>
										</li>
										<li className={s.item}>
											<h3>Выпуск 2-й итерации</h3>
											<p>
												Улучшение функций и запуск совместно с крупными
												партнёрами.
											</p>
										</li>
										<li className={s.item}>
											<h3>Маркетинговые функции</h3>
											<p>
												Промо с партнёрами и механика с шансом 0,5% на призы.
											</p>
										</li>
									</ul>
								</div>
								<div className={clsx(s.cascade_main, activeNav > 1 && s.show)}
									style={{transform: `translateY(${activeNav > 0 ? (!isMobile ? `-${(!isPad ? 26.4 : 55)}vh` : `-${524}px`) : '0px'})`}}>
									<ul className={s.itemes}>
										<li className={s.item}>
											<h3>Механика крипто-доната</h3>
											<p>
												Добавить донат для покупки валюты и роста аккаунтов.
											</p>
										</li>
										<li className={s.item}>
											<h3>Пересмотр механики</h3>
											<p>
												Проработка поведения и управления для максимальной
												реалистичности.
											</p>
										</li>
										<li className={s.item}>
											<h3>Масс-привлечение юзеров</h3>
											<p>
												Маркетинг + раздачи (AirDrop) для новых
												пользователей.
											</p>
										</li>
										<li className={s.item}>
											<h3>Режим турнира</h3>
											<p>Привлечь аудиторию конкурентов через турнир.</p>
										</li>
										<li className={s.item}>
											<h3>2-й инвестиционный раунд</h3>
											<p>
												Привлечение средств для развития игры,
												масштабирования и новых возможностей.
											</p>
										</li>
										<li className={s.item}>
											<h3>Улучшение UX и токеномики</h3>
											<p>Доработать интерфейс и токеномику по фидбэку.</p>
										</li>
									</ul>
								</div>
								<div className={clsx( s.cascade_main, activeNav > 2 && s.show)}
									style={{transform: `translateY(${activeNav > 1 ? (!isMobile ? `-${(!isPad ? 26.4 : 55)}vh` : `-${524}px`) : '0px'})`}}>
									<ul className={s.itemes}>
										<li className={s.item}>
											<h3>3D-модели автомобилей</h3>
											<p>
												Переход на 3D для улучшения визуала и
												кастомизации.
											</p>
										</li>
										<li className={s.item}>
											<h3>Функции кастомизации</h3>
											<p>
												Расширение возможностей для привлечения
												коллекционеров.
											</p>
										</li>
										<li className={s.item}>
											<h3>Реферальная программа</h3>
											<p>
												Внедрение 3-уровневой системы для органического
												роста.
											</p>
										</li>
										<li className={s.item}>
											<h3>Третья итерация</h3>
											<p>
												Выпуск версии с улучшениями и новой
												кастомизацией.
											</p>
										</li>
										<li className={s.item}>
											<h3>Листинг токенов</h3>
											<p>
												Размещение токенов на платформах для повышения
												доступности.
											</p>
										</li>
										<li className={s.item}>
											<h3>Удержание аудитории</h3>
											<p>
												Разработка механик для долгосрочного вовлечения
												пользователей.
											</p>
										</li>
									</ul>
								</div>
								<div className={clsx( s.cascade_main, activeNav > 3 && s.show)}
									style={{transform: `translateY(${activeNav > 2 ? (!isMobile ? `-${(!isPad ? 26.4 : 55)}vh` : `-${524}px`) : '0px'})`}}>
									<ul className={clsx(s.itemes, s.item_four)}>
										<li className={clsx(s.item)}>
											<h3>Удержание аудитории</h3>
											<p>
												Внедрить функции для интереса пользователей
												и создания экосистемы.
											</p>
										</li>
										<li className={s.item}>
											<h3>Торговля токенами</h3>
											<p>
												Разрешить обмен токенов внутри приложения.
											</p>
										</li>
										<li className={s.item}>
											<h3>Отчет для инвесторов</h3>
											<p>
												Показать достижения и потенциал CarMax за
												год.
											</p>
										</li>
										<li className={s.item}>
											<h3>Ремаркетинг</h3>
											<p>
												Запуск кампании для возврата ушедших
												пользователей.
											</p>
										</li>
									</ul>
								</div>
								<div className={clsx( s.cascade_main, activeNav > 4 && s.show)}
									style={{transform: `translateY(${activeNav > 3 ? (!isMobile ? `-${(!isPad ? 26.4 : 55)}vh` : `-${524}px`) : '0px'})`}}></div>
							</div>
						)}
						{activeNav == 4 && (
							<div className={clsx(s.tokenomics, speed == 100 && s.active)}>
								{speed != 100 && (
									<div className={s.start}>
										<h3 className={s.title}>Tokenomics</h3>
										<div className={s.speed}>
											<h3>{speed}</h3>
											<p>km/h</p>
										</div>
									</div>
								)}
								{
									speed == 100 && (
										<div className={s.img_token}>
											<div
												className={s.img}
												style={{
													backgroundImage: `url(${
														!isMobile
															? !isPad
																? token
																: tokenMin
															: tokenMobile
													})`,
												}}></div>
											<div
												className={s.glitch}
												style={{
													backgroundImage: `url(${
														!isMobile
															? !isPad
																? token
																: tokenMin
															: tokenMobile
													})`,
												}}></div>
										</div>
									)
								}
							</div>
						)}
					</div>

					<div className={clsx(s.rigth, activeNav == 4 && s.active)}>
						<img src={!isMobile ? rigth : rigthMin} alt='line' />
					</div>
				</div>

				<div className={s.backround}></div>
			</div>
			<div className={s.content}></div>
		</div>
	);
}
