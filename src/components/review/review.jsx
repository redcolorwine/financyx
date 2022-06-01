import cmedia from './review.module.css';
import settingsButton from './../../media/set.png';
import PersonalFinanceEdit from './personalFinanceEdit';
import { useEffect } from 'react';

const Review = (props) => {
    useEffect(() => {
        props.getBalance();
    }, [])
    const OnBut = () => {
        props.editFinanceWindow(true);
    }

    return (
        <div className={cmedia.review}>
            <div className={cmedia.welcome}>
                <p>Приветствую, Sergey! Хорошего тебе дня :)</p>
            </div>
            <h1>Обзор</h1>
            <div className={cmedia.content}>
                <div className={cmedia.firstBlock}>
                    <div className={cmedia.moneyBlock}>
                        <h2>Мои финансы</h2>
                        <p>Баланс: <span>{props.personalFinance.balance} p.</span></p>
                        <p>Баланьсяга: {props.allthebalance}</p>
                        <p>Наличные: <span>{props.personalFinance.cash} р.</span></p>
                        <p>Карты: <span>{props.personalFinance.cards} р.</span></p>
                        <p>Кредитка: <span>{props.personalFinance.credit} р.</span></p>
                        <img src={settingsButton} onClick={OnBut} />
                    </div>
                    <div className={cmedia.monthBudget}>
                        <h2>Бюджет на май</h2>
                        <table>
                            <tr>
                                <th>Расход</th>
                                <th>Осталось</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Платежи</td>
                                    <td><span>4000 p.</span></td>
                                </tr>
                                <tr>
                                    <td>Продукты</td>
                                    <td><span>2000 p.</span></td>
                                </tr>
                                <tr>
                                    <td>Подписки на сервисы</td>
                                    <td><span>1250 p.</span></td>
                                </tr>
                                <tr>
                                    <td>Транспорт</td>
                                    <td><span>420 р.</span></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div className={cmedia.secondBlock}>
                    <div className={cmedia.forecast}>
                        <table>
                            <tr>
                                <th></th>
                                <th>Май</th>
                                <th>Июнь</th>
                                <th>Июль</th>
                                <th>Август</th>
                                <th>Сентябрь</th>
                                <th>Октябрь</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Доход</td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>12000 p.</span></td>
                                </tr>
                                <tr>
                                    <td>Расход</td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                </tr>
                                <tr>
                                    <td>Баланс</td>
                                    <td><span>12000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                    <td><span>2000 p.</span></td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                    <div className={cmedia.planpayments}>
                        <h4>Запланированные платежи</h4>
                        <p>30 июня</p>
                        <p>через 30 дней</p>
                        <p>Интернет - 800 р.</p>
                    </div>
                </div>
                {props.editFinance && <PersonalFinanceEdit getBalance={props.getBalance} editPersonalAccount={props.editPersonalAccount} editFinanceWindow={props.editFinanceWindow} personalFinance={props.personalFinance} editPersonalFinance={props.editPersonalFinance} typesOfAccounts={props.typesOfAccounts} myAccounts={props.myAccounts} />}

            </div>
        </div>
    )
}

export default Review;