/**
 * Created by charles on 16/01/2018.
 */

// state argument is not application state, only the state this reducer is responsible for
// remember we make containers which is to have a component that can touch redux state directly
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED' :
            return action.payload
    }
    /* we also need to handle case in which user first boots app, and no book is immediately selected
    * if boot app up and user hasn't clicked on anything yet, we are just returning state with 'Undefined'
    * Redux doesn't allow us to return undefined from reducer otherwise throw an error
    * we must always return a non-undefined value*/
    // do to handle this initial case we will default value of state args to null

    /* it is really important that we never mutate our current state to produce a new version of state */
    // the object that return from reducer must 100% fresh and clean
    // don't do thing like state.title = book.title and then return state
    /* remember reducers need to be connected into combined reducers statement in index.js in reducer folder*/
    return state
}