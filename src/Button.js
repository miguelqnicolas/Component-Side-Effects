import React from 'react';

const Button = props => {
    return (
        <button onClick={() => (props.setDay(props.day - 1))}>Yesterday's AMOD</button>
    );
};

export default Button;