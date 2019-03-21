import React from "react";
import { compose, setDisplayName } from "recompose";
import AppSpinner from '../common/AppSpinner';

const withLoadingDisplay = WrappedComponent => props => {
    const { isLoading, ..._props } = props;
    if(isLoading){
        return <AppSpinner/>
    }
    return <WrappedComponent {..._props}/>
};

export default compose(
    setDisplayName("withLoadingDisplay"),
    withLoadingDisplay
);