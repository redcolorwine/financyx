import React, { useState } from 'react';
import cmedia from './accountItem.module.css';

const EditAccount = (props) => {
    let nameRef = React.createRef();
    let balanceRef = React.createRef();
    let typeRef = React.createRef();
    let statusRef = React.createRef();
    let currRef = React.createRef();
    let types = props.typesOfAccounts.type.map((type) => {
        return (<option value={type.id} id={type.id} key={type.id}>{type}</option>)
    })
    let statuses = props.typesOfAccounts.status.map((status) => {
        return (<option value={status.id} id={status.id} key={status.id}>{status}</option>)
    })
    let currencies = props.typesOfAccounts.currency.map((currency) => {
        return (<option value={currency.id} id={currency.id} key={currency.id}>{currency}</option>)
    })

    // let nameRef = React.createRef();
    // let balanceRef = React.createRef();
    // let typeRef = React.createRef();
    // let creditRef = React.createRef();

    const [localName, setLocalName] = useState(props.name);
    const [localBalance, setLocalBalance] = useState(props.balance);
    const [localType, setLocalType] = useState(props.type);
    const [localStatus, setLocalStatus] = useState(props.status);
    const [localCurrency, setLocalCurrency] = useState(props.currency);

    const onBalanceChange = () => {
        setLocalBalance(balanceRef.current.value);
    }
    const onNameChange = () => {
        setLocalName(nameRef.current.value);
    }
    const onTypeChange = () => {
        setLocalType(typeRef.current.value);
    }
    const onStatusChange = () => {
        setLocalStatus(statusRef.current.value);
    }
    const onCurrencyChange = () => {
        setLocalCurrency(currRef.current.value);
    }
    const onEdit = (event) => {
        event.preventDefault();
        props.editPersonalAccount({ id: props.id, name: nameRef.current.value, type: typeRef.current.value, status: statusRef.current.value, currency: currRef.current.value, balance: balanceRef.current.value });
        props.getBalance();
        props.setLocalEditAccount(false);
        // props.editPersonalFinance({ balance: balRef.current.value, cash: cashRef.current.value, cards: cardsRef.current.value, credit: creditRef.current.value });
        // props.editFinanceWindow(false);
    }
    const onCancel = (event) => {
        event.preventDefault();
        // props.editFinanceWindow(false);
    }


    return (
        <div className={cmedia.editAccount}>
            <form>
                <label htmlFor="name">Наименование</label>
                <input type="text" name='name' value={localName} ref={nameRef} onChange={onNameChange} />
                <label htmlFor="type">Тип счёта</label>
                <select ref={typeRef} placeholder="Тип" value={localType} onChange={onTypeChange}>
                    {types}
                </select>
                <label htmlFor="status">Статус</label>
                <select ref={statusRef} placeholder="Статус" value={localStatus} onChange={onStatusChange}>
                    {statuses}
                </select>
                <label htmlFor="currency">Валюта</label>
                <select ref={currRef} placeholder="Валюта" value={localCurrency} onChange={onCurrencyChange}>
                    {currencies}
                </select>
                <label htmlFor="balance">Остаток</label>
                <input type="text" name='balance' value={localBalance} ref={balanceRef} onChange={onBalanceChange} />
                <button onClick={onEdit}>OK</button>
            </form>
        </div>
    )
}

export default EditAccount;