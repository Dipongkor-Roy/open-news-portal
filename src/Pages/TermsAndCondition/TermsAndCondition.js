import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Welcome To Terms And Condition</h2>
            <p>Go Back To <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default TermsAndCondition;