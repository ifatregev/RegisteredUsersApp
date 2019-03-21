import React, {Component} from 'react';
import {Spinner} from 'reactstrap';
import './Spinner.scss';


export default class Spinner extends Component {

    render() {
        return (
            <div className="spinner">
                <Spinner color="light"/>
            </div>
        );
    }
}