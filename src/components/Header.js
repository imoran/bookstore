import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
    return (
        <StyledHeader>
            <StyledUl>
                <div className="menu-items">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                </div>
                <i className="book icon big"></i>
            </StyledUl>
        </StyledHeader>
    );
};
    
const StyledHeader = styled.div`
    font-size: 20px;
    list-style: none;
`;

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 25px;
    background: salmon;
    margin-top: 0;
`;


export default Header;