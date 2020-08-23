import React, { Component } from 'react';
import axios from 'axios';


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


    render() {
        const { title, subtitle, description } = this.state.bookData ? this.state.bookData.volumeInfo : '';
        return this.state.bookData ? (
            <div>
                <img src={this.state.bookData.volumeInfo.imageLinks.medium}/>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
            </div>
        ) : "";
    }
}

export default BookDetails;