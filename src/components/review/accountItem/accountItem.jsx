import { useState } from 'react';
import cmedia from './accountItem.module.css';
import EditAccount from './editAccount';

const AccountItem = (props) => {

    const [localEditAccount, setLocalEditAccount] = useState(false);

    const onAccountClick = () => {
        if (localEditAccount) {
            setLocalEditAccount(false);
        } else {
            setLocalEditAccount(true);
        }
    }

    return (
        <div className={cmedia.accountItem}>
            <div className={cmedia.textBlock} onClick={onAccountClick}>{props.name} <p>{props.type}</p> <span>{props.balance} P.</span></div>
            {localEditAccount && <EditAccount setLocalEditAccount={setLocalEditAccount} getBalance={props.getBalance} editPersonalAccount={props.editPersonalAccount} typesOfAccounts={props.typesOfAccounts} id={props.id} name={props.name} status={props.status} type={props.type} balance={props.balance} currency={props.currency} />}
        </div>
    )
}

export default AccountItem;