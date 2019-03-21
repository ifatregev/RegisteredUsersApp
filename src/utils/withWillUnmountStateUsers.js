import {compose, lifecycle, setDisplayName} from "recompose";

const withWillUnmountStateUsers = lifecycle({
    componentWillUnmount() {
        const {firebase:{dbRef}} = this.props;
        dbRef.off();
    }
});

export default compose(
    setDisplayName("withWillUnmountStateUsers"),
    withWillUnmountStateUsers
);