import cmedia from './transactions.module.css';

const Transactions = (props) => {
    return (
        <div className={cmedia.transactions}>
            <div className={cmedia.welcome}>
                <p>Приветствую, Sergey! Хорошего тебе дня :)</p>
            </div>
            <h1>Транзакции</h1>
        </div>
    )
}

export default Transactions;