import React  from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import {createBrowserHistory} from "history";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';


ReactDOM.render(
<Router>
        <Route path='/' exact>
            <App />
        </Route>
</Router>, document.getElementById('root'));
