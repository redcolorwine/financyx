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
            {localEditAccount && <EditAccount typesOfAccounts={props.typesOfAccounts} />}
        </div>
    )
}

export default AccountItem;