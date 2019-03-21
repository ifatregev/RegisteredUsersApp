import React from "react";
import { compose, setDisplayName } from "recompose";
import ErrorPage from "../common/ErrorPage";

const withErrorDisplay = WrappedComponent => props => {
    const { error, ..._props } = props;
    if (error) {
        return <ErrorPage error={error}/>
    }
    return <WrappedComponent {..._props}/>

};

export default compose(
    setDisplayName("withErrorDisplay"),
    withErrorDisplay
);