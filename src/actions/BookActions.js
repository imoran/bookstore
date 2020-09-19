import axios from 'axios';
export const FETCH_BOOK_LIST = 'FETCH_BOOK_LIST';

export const fetchBooksSuccess = (data) => ({
    type: FETCH_BOOK_LIST,
    payload: data
});


export const fetchBookDetails = () => {
    const API_KEY = "AIzaSyD28A6GtxRzqLpCl1nd32EXQeeD9yV6BKY";

    return (dispatch) => {
        // check state to see if you need to refetch data
        return axios.get(`
            https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`
        ).then(({ data }) => {
            dispatch(fetchBooksSuccess(data));
            return data;
        })
        .catch((err) => {
            console.log("err", err)
        });
    }
};