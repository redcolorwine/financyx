import { combineReducers, createStore } from "redux";
import ReviewReducer from "./reviewReducer";

let reducers = combineReducers({
    review: ReviewReducer
});

let store = createStore(reducers);

export default store;