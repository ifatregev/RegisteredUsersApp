import React from 'react';
import {Row, Col} from 'reactstrap';
import './UserProfile.scss';

const UserProfile = ({user: {first_name, last_name, avatar_url}}) => (
    <Row className="user-profile">
        <Col xs="12" sm={{ size: '2', offset: 4 }} className="user-name">
            <div>First name: {first_name}</div>
            <div>Last name: {last_name}</div>
        </Col>
        <Col xs="12" sm="6" className="user-pic">
            <img src={avatar_url} alt="user portrait"/>
        </Col>
    </Row>
);

export default UserProfile;
