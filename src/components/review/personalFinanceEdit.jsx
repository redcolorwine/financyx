import { useState } from 'react';
import cmedia from './review.module.css';
import React from 'react';
import AccountItem from './accountItem/accountItem';

const PersonalFinanceEdit = (props) => {

    let balRef = React.createRef();
    let cashRef = React.createRef();
    let cardsRef = React.createRef();
    let creditRef = React.createRef();

    const [localBalance, setLocalBalance] = useState(props.personalFinance.balance);
    const [localCash, setLocalCash] = useState(props.personalFinance.cash);
    const [localCards, setLocalCards] = useState(props.personalFinance.cards);
    const [localCredit, setLocalCredit] = useState(props.personalFinance.credit);

    const onBalanceChange = () => {
        setLocalBalance(balRef.current.value);
    }
    const onCashChange = () => {
        setLocalCash(cashRef.current.value);
    }
    const onCardsChange = () => {
        setLocalCards(cardsRef.current.value);
    }
    const onCreditChange = () => {
        setLocalCredit(creditRef.current.value);
    }

    const onEdit = (event) => {
        event.preventDefault();
        props.editPersonalFinance({ balance: balRef.current.value, cash: cashRef.current.value, cards: cardsRef.current.value, credit: creditRef.current.value });
        props.editFinanceWindow(false);
    }
    const onCancel = (event) => {
        event.preventDefault();
        props.editFinanceWindow(false);
    }
    let accounts = props.myAccounts.map(account => {
        return (<div>
            <AccountItem typesOfAccounts={props.typesOfAccounts} name={account.name} type={account.type} balance={account.balance} currency={account.currency} />
        </div>)
    })
    return (
        <div className={cmedia.editFinance}>
            <form>
                <input type="text" placeholder='Баланс' name="balance" value={localBalance} ref={balRef} onChange={onBalanceChange} />
                <input type="text" placeholder='Наличные' name="cash" value={localCash} ref={cashRef} onChange={onCashChange} />
                <input type="text" placeholder='Карты' name="cards" value={localCards} ref={cardsRef} onChange={onCardsChange} />
                <input type="text" placeholder='Кредитка' name="credit" value={localCredit} ref={creditRef} onChange={onCreditChange} />
                <button onClick={onCancel}>Отменить</button>
                <button className={cmedia.editButton} onClick={onEdit}>Изменить</button>
            </form>
            <h1>Счета</h1>
            {accounts}
            <button>Создать</button>
        </div>
    )
}

export default PersonalFinanceEdit;