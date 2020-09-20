import React, { Component } from 'react';
import Book from './Book';
import { fetchBookDetails } from '../actions/BookActions';
import { connect } from 'react-redux';
import styled from 'styled-components';

export class Books extends Component {
    constructor(props) {
        super(props);
        this.state = { books: null }
    }

    componentDidMount() {
        this.props.fetchBookDetails().then((data) => {
            this.setState({ books: data })
        });
    }

    render() { 
        return this.state.books ? (
            <BooksContainer>
                {this.state.books.map((book) => {
                    return (
                        <Book key={book.id} props={book}/>
                    );
                })}
            </BooksContainer>
        ) : "";
    }
}

const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 170px 0 170px;
`;

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
    fetchBookDetails: (data) => dispatch(fetchBookDetails(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);