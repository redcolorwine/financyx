import { connect } from 'react-redux';
import { editAccountWindow, editFinanceWindow, editPersonalAccount, editPersonalFinance, getBalance } from '../../redux_store/reviewReducer';
import Review from './review';

let mapStateToProps = (state) => {
    return {
        personalFinance: state.review.personalFinance,
        editFinance: state.review.editFinance,
        myAccounts: state.review.myAccounts,
        typesOfAccounts: state.review.typesOfAccounts,
        allthebalance: state.review.allthebalance
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        editFinanceWindow: (editFinance) => {
            dispatch(editFinanceWindow(editFinance))
        },
        editPersonalFinance: (personalFinance) => {
            dispatch(editPersonalFinance(personalFinance))
        },
        editPersonalAccount: (account) => {
            dispatch(editPersonalAccount(account))
        },
        getBalance: () => {
            dispatch(getBalance())
        },
    }
}

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;