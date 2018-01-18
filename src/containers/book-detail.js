/**
 * Created by charles on 16/01/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

/* Redux is in charge of managing application state and state is a single plain JS object */
// noted: application state is completely different than a component state
// component state can be set like this.state.*** and this.setState({a, b})
// Redux -> application state (formed by reducers)
// react has component state
class BookDetail extends Component {
    render() {
        /* when app first boot up, state of active book is always going to null return from reducer
        * when no click on anything yet so we don't have anything selected
        * what this means is component is going to render and it's going to say this props.book is null*/
        // that's why we need initial check to return early for each object/props before flat out throw an error
        // because we expect property to be defined
        /* the key here is we manipulate application state over time through use of action creators*/
        if (!this.props.book) {
            return <div>Sleect a book to get started</div>
        }
        // how easy to add one more detail of property over reducer when having more property in state of objects in reducers_books
        return (
            <div>
                <h3> Details for :</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// helper function to connect with redux
function mapStateToProps(state) {
    // return member this obj that is going to show up as props inside of book detail
    return {
        book: state.activeBook
    };
}

// last step is to make sure export as container for redux and remove export keyword in BookDetail class def
export default connect(mapStateToProps)(BookDetail);
