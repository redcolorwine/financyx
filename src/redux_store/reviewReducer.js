let initialState = {
    personalFinance: { balance: 250000, cash: 30000, cards: 240000, credit: 1200 },
    typesOfAccounts: { name: '', type: ['Наличные', 'Банковский счёт', 'Банковская карта'], status: ['Активный', 'Закрытый'], currency: ['Рубль (руб.)', 'Доллар (dol.)', 'Евро (eur.)'] },
    myAccounts: [{ name: 'Наличные', type: 'Наличные', status: 'Активный', currency: 'Рубль (руб.)', balance: 400000 }, { name: 'С Банка', type: 'Банковский счёт', status: 'Активный', currency: 'Рубль (руб.)', balance: 20000 }],
    editFinance: false,
    editAccount: false,
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

        default: return state;
    }
}



export const editFinanceWindow = (editFinance) => { return { type: 'EDIT_FINANCE_WINDOW', editFinance } }
export const editAccountWindow = (editAccount) => { return { type: 'EDIT_ACCOUNT_WINDOW', editAccount } }
export const editPersonalFinance = (personalFinance) => { return { type: 'EDIT_PERSONAL_FINANCE', personalFinance } }
export default ReviewReducer