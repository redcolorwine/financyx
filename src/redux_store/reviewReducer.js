let initialState = {
    personalFinance: { balance: 250000, cash: 30000, cards: 240000, credit: 1200 },
    typesOfAccounts: { name: '', type: ['Наличные', 'Банковский счёт', 'Банковская карта'], status: ['Активный', 'Закрытый'], currency: ['Рубль (руб.)', 'Доллар (dol.)', 'Евро (eur.)'] },
    myAccounts: [{ id: 1, name: 'Наличные', type: 'Наличные', status: 'Активный', currency: 'Рубль (руб.)', balance: 400000 }, { id: 2, name: 'С Банка', type: 'Банковский счёт', status: 'Активный', currency: 'Рубль (руб.)', balance: 20000 }],
    editFinance: false,
    editAccount: false,
    allthebalance: 0,
}

const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_FINANCE_WINDOW': {
            return {
                ...state,
                editFinance: action.editFinance
            }
        }
        case 'EDIT_ACCOUNT_WINDOW': {
            return {
                ...state,
                editAccount: action.editAccount
            }
        }
        case 'EDIT_PERSONAL_FINANCE': {
            return {
                ...state,
                personalFinance: action.personalFinance
            }
        }
        case 'EDIT_PERSONAL_ACCOUNT': {
            debugger;
            let acc = state.myAccounts.filter(account => account.id != action.account.id);
            acc.push(action.account);
            return {
                ...state,
                myAccounts: acc,
            }
        }
        case 'GET_BALANCE': {
            let countBalance = 0;
            for (let i = 0; i < state.myAccounts.length; i++) {
                countBalance += Number(state.myAccounts[i].balance);
            }
            return {
                ...state,
                allthebalance: countBalance
            }
        }
        default: return state;
    }
}



export const editFinanceWindow = (editFinance) => { return { type: 'EDIT_FINANCE_WINDOW', editFinance } }
export const editAccountWindow = (editAccount) => { return { type: 'EDIT_ACCOUNT_WINDOW', editAccount } }
export const editPersonalFinance = (personalFinance) => { return { type: 'EDIT_PERSONAL_FINANCE', personalFinance } }
export const editPersonalAccount = (account) => { return { type: 'EDIT_PERSONAL_ACCOUNT', account } }
export const getBalance = () => { return { type: 'GET_BALANCE' } }
export default ReviewReducer