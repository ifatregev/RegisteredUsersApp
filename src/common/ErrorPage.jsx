import React, {Component} from 'react';
import {Spinner} from 'reactstrap';
import './AppSpinner.scss';

export default class AppSpinner extends Component {

    render() {
        return (
            <div className="app-spinner">
                <Spinner/>
            </div>
        );
    }
}