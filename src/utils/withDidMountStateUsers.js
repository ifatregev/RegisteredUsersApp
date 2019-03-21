import {compose, lifecycle, setDisplayName} from "recompose";
import { withFirebase } from '../config/firbaseConfig';

const withDidMountStateUsers = lifecycle({
    componentDidMount() {
        const {firebase:{dbRef}} = this.props;
        this.setState({
            isLoading: true
        });
        dbRef.on('value', snapshot => (
                this.setState({
                    users: snapshot.val(),
                    isLoading: false
                })
            ), (err) => (this.setState({
                error: err.message,
                isLoading: false
            }))
        );
    }
});

export default compose(
    setDisplayName("withDidMountStateUsers"),
    withFirebase,
    withDidMountStateUsers
);
