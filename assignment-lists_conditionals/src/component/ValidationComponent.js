import React from 'react';

export const validateLength = (props) => {
    let validateResult = (props.input.count > 4) ? 'Text long enough' : 'Text too short';
    let pStyle = (props.input.count > 4) ? {color: 'green'} : {color: 'red'};

    return (
        <div>
            <p
                style={pStyle}
            >{validateResult}</p>
        </div>
    )
}