/**
 * Created by charles on 02/01/2018.
 */
// purpose of book list component here is to render a list of books
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux'; // we use single curly braces to pull off just a single property

/* changing state is what action and action creator for */
import {selectBook} from '../actions/index';
/* below func is to make sure action is created by action creator ends up flowing through all different reducers */
import {bindActionCreators} from 'redux';

/*gonna define this component as container instead of component
* gonna promote this component to container
* A container is react component that has direct connection to state managed by redux
*
* we have data(redux), view(react) and working usable bridge(react-redux)
* we can inject state into container
* sometimes container was called smart component or dump component
*
* in order to distinguish difference between compnent and container
* will move those dump components into another directory (container)
* instead of component dir
* */

// how to decide which components be promoted to redux container
/*in general we want most parent component that uses a particular
* a piece of state needs to be connected to redux as a container*/

// react and redux are not at all intrinsically connected
/* since we start use react redux, we are not exporting class as default*/
// remove export default
class BookList extends Component {
    renderList() {
        /* this.props.books as merger to combine react view and redux state
        * to generate a usable application connecting*/
        // redux and react are separate lib
        // the connection is build through react-redux lib
        return this.props.books.map((book) => {
            return (
                // because this is <li> list, we need key as prop
                /* add onclick handler to invoke action and pass book as argu*/
                <li
                    key = {book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            // create ul and call helper func to render list
            // which is map over an array of books gonna passed thru component
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
// the purpose of func is to take app state as argument
// where state contains array of books and active book detail
/* react-redux link are all done via use of this func */
function mapStateToProps(state) {
    /* whatever is returned will show up as props inside of container here */
    // if our state ever changes, this container will instantly render with new list of books
    return {
        // whenever state changes, object in state func will be assigned as props to component
        books: state.books // connection between redux and container
    }
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called, the result should be passed to all of our reducers
    /* the purpose of bind action creators and dispatch is specifically to take what gets returned from select book
    * and make sure that it flows through all reducers*/
    return bindActionCreators(
        {selectBook: selectBook} // object as props to container, selectbook in key will invoke action
        , dispatch)
}

/* why we delete above export default from class BookList
* is we gonna export from below func where we make container*/
// we pass booklist state into second parenthesis
// connect from react-redux take a func and a component and produce a container
// this container is component that is aware of state that is contained by
// redirects map state to props
/*export default connect(mapStateToProps)(BookList); */
// add new param into connect for redux
// promote booklist from a component to container - it needs to know about this new dispatch method, selectbook, make it available as a prop
export default  connect(mapStateToProps, mapDispatchToProps)(BookList)

