import React from 'react';

// can we quickly go over destructuring?

const Media = props => {
    return (
        <img src={props.media} alt='astronomy'></img>
    );
};

export default Media;