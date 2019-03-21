import React, {Component} from 'react';
import UsersBase from './users/UsersBase';
import './App.scss';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <UsersBase/>
            </div>
        );
    }
}
