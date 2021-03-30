import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ErrorBoundary = ({children}) => {
    const [error, setError] = useState(false);

    if (!error) {
        return {children};
    }
    throw new Error('Uh Oh');
}
ErrorBoundary.prototype = {
    children: PropTypes.node.isRequired
}

export default ErrorBoundary;
