import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './book.css';


export class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { bookData: null }
    }
    
    componentDidMount() {
        const id  = this.props.match.params.id;

        axios.get(
            `https://www.googleapis.com/books/v1/volumes/${id}`
        ).then(({ data }) => {
            this.setState({ bookData: data })
        });
    }

    getAuthors() {
        return this.state.bookData ? this.state.bookData.volumeInfo.authors.map((author) => author).join(", ") : "";
    }


    render() {
        const { title, subtitle, description } = this.state.bookData ? this.state.bookData.volumeInfo : '';
        const authors = this.getAuthors();
        return this.state.bookData ? (
            <>
                <h1 className="book-title">{title}</h1>
                <BookDetailContainer>
                    <div>
                        <img src={this.state.bookData.volumeInfo.imageLinks.small}/>
                    </div>
                    <BookDetailColumn>
                        <h2>{subtitle}</h2>
                        <p>{authors}</p>
                        <p>{description}</p>
                    </BookDetailColumn>
                </BookDetailContainer>
            </>
        ) : "";
    }
}

const BookDetailContainer = styled.div`
    display: flex;
    padding: 0px 170px 0 170px;
`;

const BookDetailColumn = styled.div`
    padding: 50px;
`;

export default BookDetails;