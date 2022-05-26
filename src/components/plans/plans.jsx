import cmedia from './plans.module.css';

const Plans = (props) => {
    return (
        <div className={cmedia.plans}>
            <div className={cmedia.welcome}>
                <p>Приветствую, Sergey! Хорошего тебе дня :)</p>
            </div>
            <h1>Планы</h1>
        </div>
    )
}

export default Plans;