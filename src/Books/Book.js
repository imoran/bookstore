import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Book = (book) => {
    return (
        <BookContainer>
            <NavLink to={`books/${book.props.id}`}>
                <img alt="book cover" src={book.props.volumeInfo.imageLinks.smallThumbnail}/>
            </NavLink>
        </BookContainer>
    );
}

const BookContainer = styled.div`
    padding: 80px;
    text-align: center;   
`;


export default Book;