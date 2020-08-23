import React, { Component } from 'react';
import Book from '../Books/Book';
import axios from 'axios';
import styled from 'styled-components';

export class Books extends Component {
    constructor(props) {
        super(props);
        this.state = { books: null };
    }

    componentDidMount() {
        const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`
        ).then(({ data }) => {
            this.setState({ books: data.items })
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

export default Books;