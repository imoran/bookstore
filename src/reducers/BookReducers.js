import { FETCH_BOOK_LIST } from '../actions/BookActions';

const bookReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_BOOK_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default bookReducer;