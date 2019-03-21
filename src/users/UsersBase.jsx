import { compose, withState, pure, setDisplayName  } from 'recompose';
import withDidMountStateUsers from '../utils/withDidMountStateUsers';
import withWillUnmountStateUsers from '../utils/withWillUnmountStateUsers';
import withLoadingDisplay from '../utils/withLoadingDisplay';
import withErrorDisplay from '../utils/withErrorDisplay';
import UsersList from './UsersList';

const UsersBase = compose(
    withState('users', '', null),
    withState('isLoading', '', false),
    withState('error', '', null),
    withDidMountStateUsers,
    withWillUnmountStateUsers,
    withErrorDisplay,
    withLoadingDisplay,
    setDisplayName("UsersBase"),
    pure
)(UsersList);

export default UsersBase;