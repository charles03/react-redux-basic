// most everything starts off with an event trigger by a user either directly or indirectly, this event can be dropdown, hover on particular elem, or onclick or indirect things like Ajax request finishing loading up a page
/* action create is a function that return an action. Action creator return an object that is then automatically sent to all different reducers inside of application
* reducers can choose depending on action to return a different piece of state depending on what the action is
* and then the newly returned piece of state then get piped into app state and then app pump this state back to react app which cause all of components to re-render*/
// in {root}/ref/action-creator-and-react-redux-flow.png
/* we call an action creator that return an action, this action flows to reducer which assemble new state and new state flows dispatch to all containers*/

// for example, selectbook is single action for now
// we export this function because obviously we want to make use of this action creator in other places inside app
// we need to make sure this function get wired up for redux by creating a connection, and further connection by binding select book action to this booklist component
export function selectBook(book) { 
    // console.log('A book has been selected', book.title)
    // instead simple console log
    // selectbook is an ActionCreator, it needs to return an action
    // an object with a type property
    /* action normally have two props, type and payload */
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

/* summary of flow in action-creator-and-react-redux-flow.png*/
// we tied an action creator to book button over book list item
// whenever a user clicked on book list item it called an action creator which dispatch star action
// that action was automatically sent to all of our different reducers
// and for reducers that cared about action by type
// in this case say book_selected
// they return a piece of application state which is assembled as global application state
// and that global application state was then injected back into all different containers inside of application
// the containers then re-rendered and caused view update
