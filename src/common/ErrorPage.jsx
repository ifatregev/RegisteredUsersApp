import React from 'react';
import './ErrorPage.scss';

const ErrorPage = ({error}) => (
        <div className="error-page">
            <h1>Something went wrong...</h1>
            {error}
        </div>
);

export default ErrorPage;