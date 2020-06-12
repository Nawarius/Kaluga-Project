import React from 'react'
import './styles/main.css'
const MainPresent = (props) => {
	return <div className = 'mainWrapp'>
		<h1>Kaluga-Project</h1>
		<h2><p>Проект полностью создан, исходя из <a href = "https://docs.google.com/document/d/e/2PACX-1vQ2xHoztuMLjRtiR-XobWj6zJuBdbJXmdSg28mL3bf5fo_Q_ZZoyrUf16dlqEEhBOHDshcl4aojgpIf/pub" target = "_blank">технического задания.</a></p></h2>
		<h2><p>Приложение построено на архитектуре FLUX</p></h2>
		<h2>Стек технологий:</h2>
		<ul>
			<h3><li>UI and BLL : React/Redux</li></h3>
			<h3><li>Middleware : ReduxThunk</li></h3>
			<h3><li>DAL API : Axios</li></h3>
			<h3><li>Forms : ReduxForm</li></h3>
		</ul>
		<h2><p>Что вообще тут происходит:</p></h2>
		<ul className = "whatsHappen">
			<h3><li>Авторизация: Пока авторизация не пройдена профиль нельзя открыть. Введенный пароль сверяется с паролем из удаленного moc сервиса. Если данные введены неверно, покажет красный крест. Если верно галочку. Есть минимальная обработка ошибок. Логин и пароль: admin/admin</li></h3>
			<h3><li>Профиль: В профиле некоторая информация обо мне (все данные приходят с мок сервиса)</li></h3>
			<h3><li>Новости: Все данные так же приходят с moc сервиса, а изменение новостей и их удаление я захардкодил</li></h3>
			<h3><li>Интерфейс "ДобавитьИзменитьУдалить": все данные жестко проходят через глобальный state. Есть минимальная обработка ошибок </li></h3>
		</ul>
		
	</div>
}

export default MainPresent