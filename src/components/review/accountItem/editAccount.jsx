import React from 'react';
import cmedia from './accountItem.module.css';

const EditAccount = (props) => {
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
    return (
        <div className={cmedia.editAccount}>
            <form>
                <label htmlFor="name">Наименование</label>
                <input type="text" name='name' />
                <label htmlFor="type">Тип счёта</label>
                <select ref={typeRef} placeholder="Тип">
                    {types}
                </select>
                <label htmlFor="status">Статус</label>
                <select ref={statusRef} placeholder="Статус">
                    {statuses}
                </select>
                <label htmlFor="currency">Валюта</label>
                <select ref={currRef} placeholder="Валюта">
                    {currencies}
                </select>
                <label htmlFor="balance">Остаток</label>
                <input type="text" name='balance' />
                <button>OK</button>
            </form>
        </div>
    )
}

export default EditAccount;