import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About'
import NotFound from './NotFound/NotFound';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about-us" component={About} />
                    <Route default component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);