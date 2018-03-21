import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux';
import store from './store/store';

import Posts from './components/posts';
import AddPosts from './components/addPosts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

render(
    <Provider store={store}>
        <Router>
        <div>
          <Switch>
            <App>
                <Route  path="/add" component={AddPosts}/>
                <Route  path="/list" component={Posts}/>
            </App>
          </Switch>
        </div>
      </Router>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
