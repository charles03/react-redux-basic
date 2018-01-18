import React from 'react';
import {Component} from 'react'; // must with curly braces
// otherwise facing error
// <Super expression must either be null or a function, not object>
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      //<div>React simple starter</div>
      //  make sure book list being rendered inside of app
      //  also wrap it into div since we have other component
        <div>
            <BookList/>
            <BookDetail/>
        </div>
    );
  }
}
