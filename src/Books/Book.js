import React from 'react';
import styled from 'styled-components';

const Book = (book) => {
    return (
        <BookContainer>
            <img src={book.props.volumeInfo.imageLinks.smallThumbnail}/>
        </BookContainer>
    );
}

const BookContainer = styled.div`
    padding: 80px;
    text-align: center;   
`;

export default Book;