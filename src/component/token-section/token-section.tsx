import s from './token-section.module.scss';
import clsx from 'clsx';
import { ReactComponent as Top } from './assets/top.svg';
import left from './assets/left.png';
import rigth from './assets/rigth.png';

export function TokenSection() {
	return (
		<div className={s.container}>
			<div className={s.body}>
				<div className={s.nav}>
					<ul>
						<li className={s.active}>
							<button>q1</button>
						</li>
						<li>
							<button>q2</button>
						</li>
						<li>
							<button>q3</button>
						</li>
						<li>
							<button>q4</button>
						</li>
					</ul>
					<Top />
				</div>
				<div className={s.token}>
					<div className={s.left}>
						<img src={left} />
					</div>
					<div className={s.frame}>
						<ul className={s.frame_items}>
							<li className={clsx(s.frame_item, s.show)}>
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
								</ul>
								<ul className={s.itemes}>
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
							</li>
							<li className={clsx(s.frame_item, s.active)}>
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
								</ul>
								<ul className={s.itemes}>
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
							</li>
							<li className={s.frame_item}>
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
								</ul>
								<ul className={s.itemes}>
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
							</li>
							<li className={s.frame_item}>
								<ul className={s.itemes}>
									<li className={s.item}>
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
								</ul>
								<ul className={s.itemes}>
									<li className={s.item}>
										<h3>Отчет для инвесторов</h3>
										<p>Показать достижения и потенциал CarMax за год.</p>
									</li>
									<li className={s.item}>
										<h3>Ремаркетинг</h3>
										<p>Запуск кампании для возврата ушедших пользователей.</p>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className={s.rigth}>
						<img src={rigth} />
					</div>
				</div>
			</div>
		</div>
	);
}
