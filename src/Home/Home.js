import React from 'react';
import axios from 'axios';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: null };
    }

    componentDidMount() {
        const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`
        ).then(({ data }) => {
            this.setState({ books: data.items }, () => {
                console.log(this.state.books)
            });
        });
    }

    render() { 
        return this.state.books ? (
            <div>
                {this.state.books.map((book, index) => {
                    return (<div key={index}>{book.volumeInfo.title}</div>);
                })}
            </div>
        ) : "";
    }
}


export default Home;

// {this.state.books.map((item) => {
//     <div>{item}</div>
// })}