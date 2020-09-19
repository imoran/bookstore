import { combineReducers } from "redux";
import bookReducer from "./reducers/BookReducers";

export default combineReducers({
    books: bookReducer
});
