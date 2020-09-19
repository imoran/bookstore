import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import BookDetails from './BookDetails';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/books/:id" component={BookDetails} />
                    <Route path="/about-us" component={About} />
                    <Route default component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;