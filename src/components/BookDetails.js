import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


export class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { book: null };
    }

    componentDidMount() {
        this.getBook();
    }

    getBook() {
        const books = this.props.books[0];
        let book;

        if (books) {
            book = books.filter((book) => {
                if (book.id === this.props.match.params.id) {
                    return book;
                }
            });
            this.setState({ book });
        }
    }

    // return books ? books.map((book) => book.volumeInfo.authors.join(', ')) : "";

    render() {
        const book = this.state.book;
        return book ? (
            <>
                <BookTitle>{book[0].volumeInfo.title}</BookTitle>
                <BookDetailContainer>
                    <div>
                        <img src={book[0].volumeInfo.imageLinks.thumbnail} />
                    </div>
                    <BookDetailColumn>
                        <p>{book[0].volumeInfo.authors.join(', ')}</p>
                        <p>{book[0].volumeInfo.description}</p>
                    </BookDetailColumn>
                </BookDetailContainer>
            </>
        ) : "";
    }
}

const BookTitle = styled.h1`
    padding-left: 170px;
    margin-bottom: 24px;
`;

const BookDetailContainer = styled.div`
    display: flex;
    padding: 0px 170px 0 170px;
`;

const BookDetailColumn = styled.div`
    padding: 50px;
`;

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(BookDetails);
