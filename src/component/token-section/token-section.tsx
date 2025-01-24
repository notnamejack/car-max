import s from './token-section.module.scss';
import clsx from 'clsx';
import { ReactComponent as Top } from './assets/top.svg';
import left from './assets/left.png';
import leftMin from './assets/left-min.png';
import rigth from './assets/rigth.png';
import rigthMin from './assets/rigth-min.png';
import { useEffect, useState } from 'react';

interface ISection {
	scroll: number;
}

export function TokenSection({ scroll }: ISection) {
	const [navItems, setNavItems] = useState<string[]>([
		'q1',
		'q2',
		'q3',
		'q4',
	]);
	const [activeNav, setActiveNav] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (scroll <= 3400) {
			setActiveNav(0);
		}
		if (scroll >= 3600) {
			setActiveNav(1);
		}
		if (scroll >= 3800) {
			setActiveNav(2);
		}
		if (scroll >= 4000) {
			setActiveNav(3);
		}
		if (scroll >= 4200) {
			setActiveNav(4);
		}
	}, [scroll]);


	useEffect(() => {
		window.addEventListener('resize', changeWigth);
		return () => {
			window.removeEventListener('resize', changeWigth);
		};
	}, []);

	const changeWigth = () => {
		if(window.document.documentElement.clientWidth <= 375)
			setIsMobile(true);
		else
			setIsMobile(false);
	}

	console.log(scroll)

	return (
		<div className={s.container}>
			<div className={s.body}>
				<div className={s.nav}>
					<ul>
						{navItems.map((item, index) =>
							<li className={`${index == activeNav && s.active}`}>
								<button onClick={() => setActiveNav(index)}>{item}</button>
							</li>
						)}
					</ul>
					<Top />
				</div>
				<div className={s.token}>
					<div className={s.left}>
						<img src={!isMobile ? left : leftMin} />
					</div>
					<div className={s.frame}>
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
											Добавление карьерного режима для вовлечения и долгосрочной
											мотивации.
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
										<p>Промо с партнёрами и механика с шансом 0,5% на призы.</p>
									</li>
								</ul>
							</div>
							<div className={s.cascade_doublee}>
								<div className={clsx(s.cascade, activeNav > 0 && s.active)}>
									<div className={clsx(s.cascade_main, activeNav > 1 && s.show)}>
										<ul className={s.itemes}>
											<li className={s.item}>
												<h3>Механика крипто-доната</h3>
												<p>Добавить донат для покупки валюты и роста аккаунтов.</p>
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
													Маркетинг + раздачи (AirDrop) для новых пользователей.
												</p>
											</li>
											<li className={s.item}>
												<h3>Режим турнира</h3>
												<p>Привлечь аудиторию конкурентов через турнир.</p>
											</li>
											<li className={s.item}>
												<h3>2-й инвестиционный раунд</h3>
												<p>
													Привлечение средств для развития игры, масштабирования и
													новых возможностей.
												</p>
											</li>
											<li className={s.item}>
												<h3>Улучшение UX и токеномики</h3>
												<p>Доработать интерфейс и токеномику по фидбэку.</p>
											</li>
										</ul>
									</div>
									<div className={s.cascade_doublee}>
										<div className={clsx(s.cascade, activeNav > 1 && s.active)}>
											<div className={clsx(s.cascade_main, activeNav > 2 && s.show)}>
												<ul className={s.itemes}>
													<li className={s.item}>
														<h3>3D-модели автомобилей</h3>
														<p>Переход на 3D для улучшения визуала и кастомизации.</p>
													</li>
													<li className={s.item}>
														<h3>Функции кастомизации</h3>
														<p>
															Расширение возможностей для привлечения коллекционеров.
														</p>
													</li>
													<li className={s.item}>
														<h3>Реферальная программа</h3>
														<p>
															Внедрение 3-уровневой системы для органического роста.
														</p>
													</li>
													<li className={s.item}>
														<h3>Третья итерация</h3>
														<p>Выпуск версии с улучшениями и новой кастомизацией.</p>
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
											<div className={s.cascade_doublee}>
												<div className={clsx(s.cascade, activeNav > 2 && s.active)}>
													<div className={clsx(s.cascade_main, activeNav > 3 && s.show)}>
														<ul className={clsx(s.itemes, s.item_four)}>
															<li className={clsx(s.item)}>
																<h3>Удержание аудитории</h3>
																<p>
																	Внедрить функции для интереса пользователей и создания
																	экосистемы.
																</p>
															</li>
															<li className={s.item}>
																<h3>Торговля токенами</h3>
																<p>Разрешить обмен токенов внутри приложения.</p>
															</li>
															<li className={s.item}>
																<h3>Отчет для инвесторов</h3>
																<p>Показать достижения и потенциал CarMax за год.</p>
															</li>
															<li className={s.item}>
																<h3>Ремаркетинг</h3>
																<p>Запуск кампании для возврата ушедших пользователей.</p>
															</li>
														</ul>
													</div>
													<div className={s.cascade_doublee}>
														<div className={clsx(s.cascade, activeNav > 3 && s.active)}>
															<div className={clsx(s.cascade_main, activeNav > 4 && s.show)}>

															</div>
															<div className={s.cascade_doublee}>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className={s.rigth}>
						<img src={!isMobile ? rigth : rigthMin} />
					</div>
				</div>
			</div>
			<div className={s.content}></div>
		</div>
	);
}
