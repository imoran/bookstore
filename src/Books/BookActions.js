import axios from 'axios';
export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = (data) => ({
    type: FETCH_BOOKS_SUCCESS,
    data
});

export const fetchBooksFailure = (err) => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { err }
});

export const fetchBookDetails = () => {
    const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

    return (dispatch) => {
        // check state to see if you need to refetch data
        dispatch(fetchBooksBegin());
        return axios.get(`
            https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`
        ).then(({ data }) => {
            dispatch(fetchBooksSuccess(data));
            return data;
        })
        .catch((err) => {
            dispatch(fetchBooksFailure(err));
        });
    }
};