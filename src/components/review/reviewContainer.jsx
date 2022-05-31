import { connect } from 'react-redux';
import { editAccountWindow, editFinanceWindow, editPersonalFinance } from '../../redux_store/reviewReducer';
import Review from './review';

let mapStateToProps = (state) => {
    return {
        personalFinance: state.review.personalFinance,
        editFinance: state.review.editFinance,
        myAccounts: state.review.myAccounts,
        typesOfAccounts: state.review.typesOfAccounts,
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        editFinanceWindow: (editFinance) => {
            dispatch(editFinanceWindow(editFinance))
        },
        editPersonalFinance: (personalFinance) => {
            dispatch(editPersonalFinance(personalFinance))
        }
    }
}

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;