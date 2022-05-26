import cmedia from './reports.module.css';

const Reports = (props) => {
    return (
        <div className={cmedia.reports}>
            <div className={cmedia.welcome}>
                <p>Приветствую, Sergey! Хорошего тебе дня :)</p>
            </div>
            <h1>Отчеты</h1>
        </div>
    )
}

export default Reports;