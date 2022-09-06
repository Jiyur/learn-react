import React from 'react';
import PropTypes from 'prop-types';
index.propTypes = {
    color: PropTypes.string.isRequired,
};

function index(props) {
    const { color } = props;
    return (
        <div className='box' style={{backgroundColor: color}}>
            
        </div>
    );
}

export default index;