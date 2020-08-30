import {
    FETCH_BOOKS_BEGIN,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from './BookActions';

const initialState = {
    books: [],
    loading: false,
    err: null
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_BEGIN:
            return {
                ...state,
                loading: true,
                err: null
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.data.items
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload.err,
                books: []
            }
        default:
            return state;
    }
}

export default bookReducer;