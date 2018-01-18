import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

/* our reducers all get tied together with this combinedReducers method */
// for each key in combineReducers object, we assign one reducer
// and that reducer is responsible for creating this piece of application state
const rootReducer = combineReducers({
  // state: (state = {}) => state
//    and then wire book reducer
//    key is a piece of state 'books', value is reducer itself
//    and then we gonna create a book list component within react
    books: BooksReducer,
    /* remember any key to object that we provide to combined reducers
    * ends up as key on our global state */
    activeBook: ActiveBook
});

export default rootReducer;
