import React from 'react';

export const displayByChar = (props) => {
    return (
        <span
            className="spanStyle"
            onClick={props.click}
        >
            {props.value}
        </span>
    )
}