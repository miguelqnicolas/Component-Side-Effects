import React from 'react';

// can we quickly go over destructuring?

const Image = props => {
    return (
        <img src={props.media}></img>
    );
};

export default Image;