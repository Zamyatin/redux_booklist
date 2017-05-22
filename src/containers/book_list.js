import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li className='list-group-item'>{ book.title }</li>
      );
    });
  }

  render() {
    return (
      <ul className='list-grou col-sm-4'>
        {this.renderList()}
      </ul>
    )
  };
}

function mapStateToProps(state) {
  // Whatever is returned from state shows up as props
  // inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
