import React from 'react';
import {Container} from 'reactstrap';
import UserProfile from './UserProfile';
import './UsersList.scss';

const UsersList = ({users}) => (
        <Container className="users-list">
            <h1 className="users-list-title">Users Details:</h1>
            {users && users.map((user, id) => (
                <UserProfile user={user} key={id}/>
            ))}
        </Container>
);

export default UsersList;
